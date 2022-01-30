import React ,{ useEffect, useState} from 'react';
import {getPlayers} from "../../services/getPlayers.service"
import { DataGrid } from '@mui/x-data-grid';

import "./style.css";

function Home() {
    const [players,setplayers] = useState([])
  const [loading,setLoad] = useState(false)
  useEffect( ()  => {
    setLoad(true)
    getPlayers().then((list) => {

      list.sort(function (a, b) {
        console.log(a,b);
        if (a.points > b.points) {
          return 1;
        }
        if (a.points < b.points) {
          return -1;
        }
        return 0;
      });
      setplayers(list.reverse())
      setLoad(false)
    })
     
  }, [])
  return (
    <div style={{height: 1000}}>

    <h1>RANK FFPL</h1>

    <DataGrid
    autoHeight={false}
      columns={[{ field: 'name' },{ field: 'kill' },{ field: 'assistance' },{ field: 'win' },{ field: 'discounts' },{ field: 'points' },]}
      loading={loading}
  hideFooterPagination
      rows={players}
    />
  </div>
  )
}

export default Home
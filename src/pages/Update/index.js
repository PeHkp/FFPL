import React ,{ useEffect, useState} from 'react';
import {updatePlayer,getPlayers} from "../../services/getPlayers.service"


function Update() {
    const [players,setplayers] = useState([])
    const [playerSelected,setplayerSelected] = useState("")
    const [kill,setKill] = useState("")
    const [assist,setAssist] = useState("")
    const [win,setWin] = useState("")
    const [atraso,setAtraso] = useState("")
  useEffect( ()  => {
    getPlayers().then((list) => {
      setplayers(list)
    })
     
  }, [])


  async function update(e) {
    e.preventDefault();

    const jogador = players.find(element => element.id === playerSelected);

    updatePlayer(
      {
        id: jogador.id,
        assistance: assist!== ""?  jogador.assistance + parseInt(assist) : jogador.assistance,
        discounts: atraso!== ""? jogador.discounts + parseInt(atraso): jogador.discounts ,
        kill:kill !== "" ?jogador.kill + parseInt(kill): jogador.kill,
        win: win !== ""?jogador.win + parseInt(win) : jogador.win
      }
    )

  }
  return (
    <div>
      <form onSubmit={update}>
      <select value={playerSelected} onChange={(e) => {
        console.log(e.target.value);
        setplayerSelected(e.target.value)}}>
              <option value={{}}>Jogador</option>
              {
                players.map((play) => <option key={play.id} value={play.id}>{play.name}</option>)
              }
            </select>

            <input
              value={kill}
              onChange={(e) => setKill(e.target.value)}
              placeholder="Kill"
            />
            <input
              value={assist}
              onChange={(e) => setAssist(e.target.value)}
              placeholder="Assistencia"
            />
            <input
              value={win}
              onChange={(e) => setWin(e.target.value)}
              placeholder="Win"
            />
            <input
              value={atraso}
              onChange={(e) => setAtraso(e.target.value)}
              placeholder="Atraso"
            />

            <button type="submit">
              Update
            </button>
      </form>
       
    </div>
  )
}

export default Update
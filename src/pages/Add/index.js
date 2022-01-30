import React ,{ useState} from 'react';
import {createPlayer} from "../../services/getPlayers.service"



function Add() {
    const [name,setName] = useState("")

  async function add(e) {
    e.preventDefault();

    createPlayer(name)
  }
  return (
    <div>
      <form onSubmit={add}>
      
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
            />

            <button type="submit">
              ADD
            </button>
      </form>
       
    </div>
  )
}

export default Add
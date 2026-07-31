import "./CSS/playerslist.css";
import { useEffect, useState } from "react";
import api from "../service/api";
import PlayerCard from "../componentes/PLayerCard/PLayerCard";

function PlayersList() {

  const [players,setPlayers]=useState([]);

  useEffect(()=>{

    async function cargarJugadores(){

      try{

        const response=await api.get("/players");
        setPlayers(response.data);

      }catch(err){

        console.error(err);

      }

    }

    cargarJugadores();

  },[]);

  return(

    <div className="players-grid">

      {players.map(player=>(
        <PlayerCard
            key={player.id}
            player={player}
        />
      ))}

    </div>

  );

}

export default PlayersList;
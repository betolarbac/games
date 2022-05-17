import { useEffect, useState } from "react";
import api from "../../services/api";


interface ResponseData {
    id: string;
    name: string;
    metacritic: string;
    background_image: string;

}

export function Listgames() {
    const API_KEY = '1a14ed0fa69d4437b8999bd07e09d696'
    const [ games, setGames] = useState<ResponseData[]>([])

   

    useEffect(() => {
        api.get(`/games?key=${API_KEY}`)
        .then(response => {
            setGames(response.data.results); 
            console.log('segundo log', games);
        })
        .catch(err => console.log(err));
    }, [])
  
    return (
        <>
        <h1>game</h1>
        <ul>{games.map(games => {
            return (
                <li>
                    <span>{games.name}</span>
                </li>
            )
        })}</ul>
        </>
    )
}
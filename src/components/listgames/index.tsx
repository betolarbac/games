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
            
          
           <div className="flex justify-center ">
           <div className=" grid grid-cols-3 gap-4  ">{games.map(games => {
            return (
                <div className="">
                    <img src={games.background_image} className="w-96 h-48 rounded-lg " alt="" />
                    <h2 className=" mx-2 -mt-8 mb-6 text-lg font-medium">{games.name}</h2>

                    
                </div>
            )
        })}</div>
           
           </div>
            
        </>
    )
}
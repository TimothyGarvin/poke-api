import React, {useState} from 'react'
import axios from 'axios'

const FetchPoke = (props) => {

    const [list, setList] = useState([])

    const pokeList = () => {
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(response => {
    //         console.log(response);
    //         setList(response.results)
    //         console.log(list)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then(response=>{
                console.log(response);
                setList(response.data.results)

            })
            
        }
    return(
        <div>
            <button onClick={pokeList}> Fetch Pokemon </button>
            {list.map((poke, index)=>{
                return (
                    <div key={index}>
                        <li>{poke.name}</li>
                    </div>
                )
            })}
        </div>
    )
}

export default FetchPoke
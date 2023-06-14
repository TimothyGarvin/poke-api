import React, {useState} from 'react'

const FetchPoke = (props) => {

    const [list, setList] = useState([])

    const pokeList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
            setList(response.results)
            console.log(list)
        })
        .catch(err=>{
            console.log(err)
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
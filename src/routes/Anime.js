import React from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Anime() {
    const [animes, setAnime] = React.useState([])

    const getAnime = async () => {
        const response = await axios.get('http://localhost:8888/anime')
        setAnime(response.data)
    }

    React.useEffect(() => {
        getAnime()
    }, [])

    const animeCards = animes.map((anime, index) => {
        return <Card key={index} anime={anime} />
    })
    return (
        <div className='home'>
            <h1> Anime </h1>
            <h2>Here's a list of exciting new anime to choose from!</h2>
       

            <div className='animeContainer'>
                {animeCards}
            </div>

        </div>
    )
}

export default Anime
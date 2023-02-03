import React from 'react';
import Card from '../components/Card';
import axios from 'axios';

function Home() {
    const [animes, setAnime] = React.useState([])

    const getTrending = async () => {
        const response = await axios.get('http://localhost:8888/anime/trending')
        console.log(response.data)
        setAnime(response.data)
    }

    React.useEffect(() => {
        getTrending()
    }, [])

    const trendingAnime = animes.map((anime, index) => {
        return <Card key={index} anime={anime} />
    })
    return (
        <div className='home'>
            <h1>Welcome to Animanga!  </h1>
            <h2>Your home for finding your next anime obsession!</h2>

            <div class="container">
                <h2 className='homeTitle'>Here's The Current Trending Anime!</h2>
                <ul class="cards">
                    {trendingAnime}
                    
                </ul>
            </div>

        </div>
    )
}

export default Home
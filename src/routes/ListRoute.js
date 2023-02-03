import axios from 'axios'
import React from 'react'
import ListAnimeCard from '../components/ListAnimeCard'

function ListRoute() {
    const listId = window.location.pathname.split('/').at(-1)
    const [listAnime, setlistAnime] = React.useState([])

    const getListAnime = async () => {
        const response = await axios.get(`http://localhost:8888/anime/lists/${listId}`)
        setlistAnime(response.data)
    }

    const updateWatch = async (id) => {
        const anime = listAnime.filter( anime => anime.id === id)
        await axios.put(`http://localhost:8888/anime/${id}`, { isWatched: !anime[0].isWatched})

        setlistAnime(prevList => {
            const updatedList = prevList.map(anime => {
                return anime.id === id ? {...anime, isWatched: !anime.isWatched} : anime
            })
            return updatedList
        })
    }

    React.useEffect(() => {
        getListAnime()
    },[])

    const animeCards = listAnime.map(anime => {
        return <ListAnimeCard key={anime.id} updateWatch={updateWatch} anime={anime} />
    })
  return (
    <div className='home'>
        {animeCards}
    </div>
  )
}

export default ListRoute
import React from 'react'
import axios from 'axios'
import List from '../components/List'

function Watchlist() {
    const [input, setInput] = React.useState("")
    const [lists, setLists] = React.useState([])

    const getLists = async () => {
        const response = await axios.get('http://localhost:8888/anime/lists')
        setLists(response.data)
    }

    React.useEffect(() => {
        getLists()
    }, [])
    
    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    const addList = async () => {
       const response = await axios.post('http://localhost:8888/anime/lists', {title: input}
       )}
    

    const handleClick = (e) => {
        e.preventDefault()
        addList()
        setInput("")
        alert('List Saved')
    }

    const listsElements = lists.map( list => {
        return <List key={list.id} list={list} />
    })



  return (
    <div className='home'>
        <h1>Watchlist</h1>

        <h2>Create New List</h2>

        <div id='addList'>
        <form onSubmit={handleClick}>
            <label>Name New List: </label>
            <input name="title" value={input} onChange={handleChange}></input>
            <button type='submit'>Save List</button>
        </form>
        </div>

        <h2>All Lists</h2>
        <div className='listsContainer'>
            {listsElements}
        </div>

        <ul className='savedList'>
            <li>
                <label className='list2'>All Saved Anime</label>
                    
                <button type='button' className='buttonList'>Go!</button>
            </li>

        </ul>
    </div>
  )
}

export default Watchlist
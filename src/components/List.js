import React from 'react'
import { useNavigate } from 'react-router-dom'

function List(props) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/watchlist/list/${props.list.list_id}`)
    }
  return (
    <div className='list'>
        {props.list.title}
        <button className='button' onClick={handleClick}>Go!</button>
    </div>
    
  )
}

export default List
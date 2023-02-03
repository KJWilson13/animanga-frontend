import React from 'react'

function Card(props) {
    const handleClick1 = () => {
        
        alert('Anime Added to Watchlist')
    }
  return (
    <div>
        <li class="card">
             <div >
                <h3 class="card-title">{props.anime.title} ({props.anime.japTitle})</h3>
                 <div class="card-content">
                    <img className='homeImg'src={props.anime.image}/>
                 </div>
                 <div>{props.anime.synopsis}</div>
                 <div> Age Rating: {props.anime.ageRating}</div>
                 <div>Viewer Rating: {props.anime.rating}</div>
            </div>
            <div class="card-link-wrapper">
                <button type='button' className='addButton' onClick={handleClick1}>Add to List!</button>
             </div>
        </li>
    </div>
  )
}

export default Card
import React from 'react'

function ListAnimeCard(props) {
  return (
    <div>
    <li class="card">
             <div >
                <h3 class="card-title">{props.anime.title}</h3>
                 <div class="card-content">
                    <img className='homeImg'src={props.anime.image}/>
                 </div>
                 <div>{props.anime.synopsis}</div>
                 <div>Viewer Rating: {props.anime.rating}</div>
            </div>
            <div class="card-link-wrapper">
                <button type='button' className='addButton' onClick={() => props.updateWatch(props.anime.id)}>{props.anime.isWatched ? "Watch Again!" : "Start!"}</button>
             </div>
        </li>
    </div>
  )
}

export default ListAnimeCard
import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul className='navbarDes'>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/anime">Anime</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlists</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
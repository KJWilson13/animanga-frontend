import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes}  from 'react-router-dom'
import Anime from './routes/Anime'
import Watchlist from './routes/Watchlist'
import Home from './routes/Home'
import ListRoute from './routes/ListRoute';



function App() {
  return (
    <>
      <div className="App">
         <header className="App-header">
            <Navbar/>
          </header>

        <div className='Routes'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/anime' element={<Anime/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>
          <Route path='/watchlist/list/:id' element={<ListRoute />} />
        </Routes>
        </div>
      </div>

    </>
  );
}

export default App;

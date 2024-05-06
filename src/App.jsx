import React, { useState } from 'react'
import './scss/styles.scss';
import './App.css';
import * as bootstrap from 'bootstrap'
import Logo from './assets/HawaiianPlantsLogo.png';

function Placeholder() {
  return (
    <div>
      <div>
        Image goes here
        Name goes here
      </div>
      <div>
        Information on the plant here
      </div>
    </div>
  )
}

function App() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  function handleInteraction() {
    setShowPlaceholder(true);
  }

  // function handleInteraction() {
  //   setShowPlaceholder(false);
  // }

  //whenever I create another function to load more content, I will write onClick={handleInteraction} to set showPlaceholder to false when the user loads more content on the screen

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <div>
              <img className='logo' src={Logo}></img>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Which Hawaiian Island?
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Island of Hawaii</a></li>
                <li><a className="dropdown-item" href="#">Maui</a></li>
                <li><a className="dropdown-item" href="#">Kauai</a></li>
                <li><a className="dropdown-item" href="#">Oahu</a></li>
                <li><a className="dropdown-item" href="#">Lanai</a></li>
                <li><a className="dropdown-item" href="#">Molokai</a></li>
                <li><a className="dropdown-item" href="#">Lanai</a></li>
                <li><a className="dropdown-item" href="#">Niihau</a></li>
                <li><a className="dropdown-item" href="#">Kahoolawe</a></li>
              </ul>
            </div>
            <div className="dropdown" onClick={handleInteraction}>
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Where On Land?
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Coastal</a></li>
                <li><a className="dropdown-item" href="#">Inland</a></li>
                <li><a className="dropdown-item" href="#">Mountains</a></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Type Of Plant?
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Tree</a></li>
                <li><a className="dropdown-item" href="#">Shrub</a></li>
                <li><a className="dropdown-item" href="#">Other</a></li>
              </ul>
            </div>
          </div>
          <div className="col-8">
            {showPlaceholder && <Placeholder />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;

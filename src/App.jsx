import React, { useState } from 'react'
import './scss/styles.scss';
import './App.css';
import * as bootstrap from 'bootstrap'
import Logo from './assets/images/HawaiianPlantsLogo.png';
import Map from './assets/images/islandmap.png';
import mhh from './assets/images/maoHibiscus.jpg';

function Placeholder() {
  return (
    <div className='row  justify-content-center'>
      <div className='col-10'>
        <img className='placeholderIMG' src={mhh} alt="The state flower of Hawaii"/>
        <div className='placeholderName'>
          <h1>Ma'o Hau Hele</h1>
          <h1>Hibiscus brackenridgei</h1>
        </div>
        <p>This endemic plant is the official state flower of Hawaii. The yellow flowers only bloom a few months out of the year during the winter time. This endangered plant has three known subspecies, brackenridgei, mokuleianus, and molokaiana.</p>
      </div>
    </div>
  )
}

const plantData = [
  { nameCommon: 'ʻŌhiʻa lehua', nameScientific: 'Metrosideros polymorpha', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi'], locations: ['Mountains', 'Forest'], type: 'Woody'},
  { nameCommon: 'Koa', nameScientific: 'Acacia koa', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi'], locations: ['Mountains', 'Forest'], type: 'Woody'},
  { nameCommon: 'ʻAkoko', nameScientific: 'Euphorbia celastroides var. stokesii', islands: ['Kauaʻi', 'Molokaʻi', 'Niʻihau', 'Kahoʻolawe'], locations: 'Coastal', type: 'Woody'},
  { nameCommon: 'ʻOhai', nameScientific: 'Sesbania tomentosa', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi', 'Kahoʻolawe'], locations: 'Coastal', type: 'Woody'},
  { nameCommon: 'Pā‘ūohi‘iaka', nameScientific: 'Jaquemontia ovalifolia subsp. sandwicense', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi','Niʻihau', 'Kahoʻolawe'], locations: 'Coastal', type: 'Herbaceous'},
  { nameCommon: 'Māʻohiʻohi', nameScientific: 'Stenogyne calaminthoides', islands: 'Island of Hawaiʻi', locations: 'Forest', type: 'Herbaceous'},
  { nameCommon: 'Ama’u', nameScientific: 'Sadleria pallida', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Molokaʻi'], locations: ['Forest', 'Other'], type: 'Herbaceous'},
  { nameCommon: 'Loulu', nameScientific: 'Pritchardia martii', islands: ['Oʻahu', 'Island of Hawaiʻi'], locations: ['Mountains', 'Coastal'], type: 'Woody'},
  { nameCommon: 'Naupaka kahakai', nameScientific: 'Scaevola taccada var. taccada', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi','Niʻihau', 'Kahoʻolawe'], locations: 'Coastal', type: 'Woody'},
  { nameCommon: 'Palapalai', nameScientific: 'Microlepia strigosa var. strigosa', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi'], locations: ['Forest', 'Mountains'], type: 'Herbaceous'},
]

function filterPlants(islandFilter, locationFilter, typeFilter) {
  return plantData.filter(plant => {
    return
      (!islandFilter || plant.island === islandFilter) &&
      (!locationFilter || plant.location === locationFilter) &&
      (!typeFilter || plant.type === typeFilter);
  });
}

function App() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [filteredPlants, setFilteredPlants] = useState([]);

  function handlePlaceholder() {
    setShowPlaceholder(true);
  }

  function handlePlants() {
    const filtered = filterPlants(islandFilter, locationFilter, typeFilter);
    setFilteredPlants(filtered);
  }


  // function handlePlaceholder() {
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
                Island
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Island of Hawaiʻi</a></li>
                <li><a className="dropdown-item" href="#">Maui</a></li>
                <li><a className="dropdown-item" href="#">Kauaʻi</a></li>
                <li><a className="dropdown-item" href="#">Oʻahu</a></li>
                <li><a className="dropdown-item" href="#">Lānaʻi</a></li>
                <li><a className="dropdown-item" href="#">Molokaʻi</a></li>
                <li><a className="dropdown-item" href="#">Niʻihau</a></li>
                <li><a className="dropdown-item" href="#">Kahoʻolawe</a></li>
              </ul>
            </div>
            <div className="dropdown" onClick={handleInteraction}>
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Location
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Coastal</a></li>
                <li><a className="dropdown-item" href="#">Forest</a></li>
                <li><a className="dropdown-item" href="#">Mountains</a></li>
                <li><a className="dropdown-item" href="#">Other</a></li>

              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Plant Type
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Woody</a></li>
                <li><a className="dropdown-item" href="#">Herbaceous</a></li>
              </ul>
            </div>
            <div className='mapBox'>
              <img className='map' src={Map} alt='hawaiian islands'></img>
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

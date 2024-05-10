import React, { useState } from 'react'
import './scss/styles.scss';
import './App.css';
import * as bootstrap from 'bootstrap'
import Logo from './assets/images/HawaiianPlantsLogo.png';
import Map from './assets/images/islandmap.png';
import mhh from './assets/images/maoHibiscus.jpg';
import ohia from './assets/images/ohialehua.jpg';
import koa from './assets/images/koa.jpg';
import akoko from './assets/images/akoko.jpg';
import ohai from './assets/images/ohai.jpg';
import pauohiiaka from './assets/images/Jacquemontia_ovalifolia_sandwicensis_.jpg';
import maohiohi from './assets/images/stenogyne.jpg';
import amau from './assets/images/Amau.jpg';
import loulu from './assets/images/Loulu.jpg';
import naupaka from './assets/images/Naupaka.jpg';
import palapalai from './assets/images/Palapalai.jpg';

const plantData = [
  { image: ohia, nameCommon: 'ʻŌhiʻa lehua', nameScientific: 'Metrosideros polymorpha', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi'], locations: ['Mountains', 'Forest'], type: 'Woody', description: 'Filler description'},
  { image: koa, nameCommon: 'Koa', nameScientific: 'Acacia koa', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi'], locations: ['Mountains', 'Forest'], type: 'Woody', description: 'Filler description'},
  { image: akoko, nameCommon: 'ʻAkoko', nameScientific: 'Euphorbia celastroides var. stokesii', islands: ['Kauaʻi', 'Molokaʻi', 'Niʻihau', 'Kahoʻolawe'], locations: 'Coastal', type: 'Woody', description: 'Filler description'},
  { image: ohai, nameCommon: 'ʻOhai', nameScientific: 'Sesbania tomentosa', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi', 'Kahoʻolawe'], locations: 'Coastal', type: 'Woody', description: 'Filler description'},
  { image: pauohiiaka, nameCommon: 'Pā‘ūohi‘iaka', nameScientific: 'Jaquemontia ovalifolia subsp. sandwicense', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi','Niʻihau', 'Kahoʻolawe'], locations: 'Coastal', type: 'Herbaceous', description: 'Filler description'},
  { image: maohiohi, nameCommon: 'Māʻohiʻohi', nameScientific: 'Stenogyne calaminthoides', islands: 'Island of Hawaiʻi', locations: 'Forest', type: 'Herbaceous', description: 'Filler description'},
  { image: amau, nameCommon: 'Ama’u', nameScientific: 'Sadleria pallida', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Molokaʻi'], locations: ['Forest', 'Other'], type: 'Herbaceous', description: 'Filler description'},
  { image: loulu, nameCommon: 'Loulu', nameScientific: 'Pritchardia martii', islands: ['Oʻahu', 'Island of Hawaiʻi'], locations: ['Mountains', 'Coastal'], type: 'Woody', description: 'Filler description'},
  { image: naupaka, nameCommon: 'Naupaka kahakai', nameScientific: 'Scaevola taccada var. taccada', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi','Niʻihau', 'Kahoʻolawe'], locations: 'Coastal', type: 'Woody', description: 'Filler description'},
  { image: palapalai, nameCommon: 'Palapalai', nameScientific: 'Microlepia strigosa var. strigosa', islands: ['Island of Hawaiʻi', 'Maui', 'Kauaʻi', 'Oʻahu', 'Lānaʻi', 'Molokaʻi'], locations: ['Forest', 'Mountains'], type: 'Herbaceous', description: 'Filler description'},
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
  const [islandFilter, setIslandFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [filteredPlants, setFilteredPlants] = useState([]);

  function handlePlaceholder() {
    setShowPlaceholder(false);
  }

  function handlePlants() {
    const filtered = filterPlants(islandFilter, locationFilter, typeFilter);
    setFilteredPlants(filtered);
  }

  function handleInteraction() {
    handlePlaceholder();
    handlePlants();
  }

  function Placeholder() {
    return (
      <div className='row  justify-content-center'>
        <div className='col-10'>
          <img className='placeholderIMG' src={mhh} alt="The state flower of Hawaii"/>
          <div className='placeholderName'>
            <h1>Ma'o Hau Hele</h1>
            <h1>Hibiscus brackenridgei</h1>
          </div>
          <p>Islands found: Oʻahu, Molokaʻi, Maui, Lānaʻi, Island of Hawaiʻi</p>
          <p>Location: Forest, Mountains</p>
          <p>Type: Woody</p>
          <p>This endemic plant is the official state flower of Hawaii. The yellow flowers only bloom a few months out of the year during the winter time. This endangered plant has three known subspecies, brackenridgei, mokuleianus, and molokaiana.</p>
        </div>
      </div>
    )
  }
  
  // function Plants() {
  //   return (
  //     {filteredPlants.map(plant => (
  //       <div className='row  justify-content-center'>
  //         <div className='col-10' key={plant.nameScientific}>
  //           <img className='placeholderIMG' src={plant.imgae} alt={plant.nameCommon}/>
  //           <div className='placeholderName'>
  //             <h1>{plant.nameCommon}</h1>
  //             <h1>{plant.nameScientific}</h1>
  //           </div>
  //           <p>Islands found: {plant.islands.join(', ')}</p>
  //           <p>Location: {plant.location.join(', ')}</p>
  //           <p>Type: {plant.type}</p>
  //           <p>{plant.description}</p>
  //         </div>
  //       </div>
  //     ))}
  //   )
  // }

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
                <li><a className="dropdown-item" href="#" onClick={() => setIslandFilter('Island of Hawaiʻi')}>Island of Hawaiʻi</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setIslandFilter('Maui')}>Maui</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setIslandFilter('Kauaʻi')}>Kauaʻi</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setIslandFilter('Oʻahu')}>Oʻahu</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setIslandFilter('Lānaʻi')}>Lānaʻi</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setIslandFilter('Molokaʻi')}>Molokaʻi</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setIslandFilter('Niʻihau')}>Niʻihau</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setIslandFilter('Kahoʻolawe')}>Kahoʻolawe</a></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Location
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => setLocationFilter('Coastal')}>Coastal</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setLocationFilter('Forest')}>Forest</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setLocationFilter('Mountains')}>Mountains</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setLocationFilter('Other')}>Other</a></li>

              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Plant Type
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => setTypeFilter('Woody')}>Woody</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setTypeFilter('Herbaceous')}>Herbaceous</a></li>
              </ul>
            </div>
            <button type="button" className="btn btn-secondary submit" onClick={handleInteraction}>Submit</button>
            <div className='mapBox'>
              <img className='map' src={Map} alt='hawaiian islands'></img>
            </div>
          </div>
          <div className="col-8">
            {showPlaceholder && <Placeholder />}
            {/* <Plants/> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;

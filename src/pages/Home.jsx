import React from 'react';
import Map from '../components/Map';

const Home = ({ pins, addPin }) => (
  <div>
    <h1>Geolocation App</h1>
    <Map pins={pins} addPin={addPin} />
  </div>
);

export default Home;

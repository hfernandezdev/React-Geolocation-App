import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import PinDetailsModal from './components/PinDetailsModal';
import { fetchPins } from './services/mockApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [pins, setPins] = useState([]);
  const [selectedPin, setSelectedPin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPins().then((data) => setPins(data));
  }, []);

  const addPin = (latlng) => {
    setPins([...pins, latlng]);
  };

  const handlePinClick = (pin) => {
    setSelectedPin(pin);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="App">
      <div className="map-container">
        <Map pins={pins} addPin={addPin} onPinClick={handlePinClick} />
      </div>
      {selectedPin && (
        <PinDetailsModal
          show={showModal}
          handleClose={handleCloseModal}
          pin={selectedPin}
        />
      )}
    </div>
  );
};

export default App;

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { DefaultIcon } from '../icons';

const Map = ({ pins, addPin, onPinClick }) => {

  const MapEvents = () => {
    useMapEvents({
      click: (e) => {
        addPin(e.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer center={[6.4238, -66.5897]} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins.map((pin, idx) => (
        <Marker
          key={idx}
          position={[pin.lat, pin.lng]}
          eventHandlers={{
            click: () => {
              onPinClick(pin);
            },
          }}
          icon={DefaultIcon}
        >
          <Popup position={[pin.lat, pin.lng]}>
            <div>
              <h2>Pin Details</h2>
              <p>Latitude: {pin.lat}</p>
              <p>Longitude: {pin.lng}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <MapEvents />
    </MapContainer>
  );
};

export default Map;

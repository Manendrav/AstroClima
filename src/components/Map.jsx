import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import marker from '../../public/loc.svg';
import { Icon } from 'leaflet'

const Map = ({ latitude, longitude }) => {

    const myIcon = new Icon({
        iconUrl: marker,
        iconSize: [32,42]
       })

    return (
        <MapContainer
            key={[latitude, longitude]}                         // Here why i use two time? -> MapContainer component doesn't automatically re-render when its center prop changes.
            center={[latitude, longitude]}                      // To ensure that the map re-renders when the center prop changes, we have to use the key prop to force a re-render.
            zoom={13}
            style={{ height: '300px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution=''
            />
            <Marker position={[latitude, longitude]} icon={myIcon}></Marker>
        </MapContainer>
    );
};

export default Map;

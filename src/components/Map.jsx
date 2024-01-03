import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ latitude, longitude }) => {

    return (
        <MapContainer
            key={[latitude, longitude]}                         // Here why i use two time? -> MapContainer component doesn't automatically re-render when its center prop changes.
            center={[latitude, longitude]}                      // To ensure that the map re-renders when the center prop changes, we have to use the key prop to force a re-render.
            zoom={13}
            style={{ height: '300px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    A marker at ({latitude}, {longitude})
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;

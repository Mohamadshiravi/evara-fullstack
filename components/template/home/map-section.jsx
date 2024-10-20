"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

export default function MapSection() {
  const [position, setPosition] = useState([51.505, -0.09]);
  return (
    <MapContainer
      className="border w-full h-full rounded-lg shadow-xl z-10"
      center={position}
      zoom={17}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Fake Address</Popup>
      </Marker>
    </MapContainer>
  );
}

// This also works


// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// export function Map(props) {
//     const { latitude, longitude } = props;

//     const position = [latitude, longitude];

//     console.log(latitude )
//     console.log(longitude)

//   // Ensure that latitude and longitude are defined before creating position


//   const customIcon = new Icon({
//     iconUrl: './images/icon-location.svg',
//     iconSize: [20, 30],
//   });

//   return (
//     <section className='map-component mt-[-80px] z-10'>
//       <div className='map'>
//         <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
//           <TileLayer
//             attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={position} icon={customIcon}>
//             <Popup>
//               You are here😁
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef } from 'react';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export function Map(props) {
  const { latitude, longitude } = props;
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const customIcon = new Icon({
      iconUrl: './images/icon-location.svg',
      iconSize: [20, 30],
    });

    if (latitude !== undefined && longitude !== undefined) {
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current);

        markerRef.current = L.marker([latitude, longitude], { icon: customIcon }).addTo(mapRef.current)
          .bindPopup('You are here😁')
          .openPopup();
      } else {
        mapRef.current.setView([latitude, longitude], 13);

        if (markerRef.current) {
          markerRef.current.setLatLng([latitude, longitude]);
        }
      }
    }
  }, [latitude, longitude]);

  return (
    <section className='map-component mt-[-80px] lg:h-full z-10 lg:mt-[-252px]'>
      <div className='map lg:h-[100vh]' id="map"></div>
    </section>
  );
}


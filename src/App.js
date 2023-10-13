import React, { useState } from 'react';
import { Details } from "./Components/Details";
import { Search } from "./Components/Search";
import { Map } from "./Components/Map";

function App() {




  const tempData = {
    "ip": "192.212.174.101",
    "location": {
        "country": "US",
        "region": "Brooklyn, NY 10001",
        "city": "South San Gabriel",
        "lat": 34.04915,
        "lng": -118.09462,
        "postalCode": "",
        "timezone": "-05:00",
        "geonameId": 5397771
    },
    "as": {
        "asn": 7127,
        "name": "SCE",
        "route": "192.212.0.0/15",
        "domain": "",
        "type": ""
    },
    "isp": "SpaceX Starlink",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    }
}

const sampleLocationData = {

  "latitude": 40.7537,
  "longitude": -73.9992
  
}
  const [apiData , setApiData] = useState(tempData);

  const [userLocation , setUserLocation] = useState(sampleLocationData);


  const fetchApi = (input) => {

    let url = `https://geo.ipify.org/api/v2/country?apiKey=at_PwzunVgoSY8HfvegkOV8J7U7eCz3h&ipAddress=${input}`;

    fetch(url)
  .then(response => response.json())
  .then(data => {
    setApiData(data)
    console.log("Api Data",data)
  })
  .catch(error => console.error('Error:', error))
  }

  const fetchLocation = async (input) => {
    const url = `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=${input}&apikey=873dbe322aea47f89dcf729dcc8f60e8`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '21434a6067msh4b1bc10b8a0880bp1cfb99jsn8a71f8694128',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse response as JSON
      console.log("location data", result);
      setUserLocation({
        latitude: result.latitude,
        longitude: result.longitude
      });
    } catch (error) {
      console.error(error);
    }
  }


    // const fetchLocation = async(input) => {
    //   const url = `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=${input}&apikey=873dbe322aea47f89dcf729dcc8f60e8`;
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': '21434a6067msh4b1bc10b8a0880bp1cfb99jsn8a71f8694128',
    //       'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
    //     }
    //   };
      
    //   try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log("location data",result);
    //     if (result.latitude && result.longitude) {
    //       setUserLocation({
    //         latitude: result.latitude,
    //         longitude: result.longitude
    //       });
    //     } else {
    //       console.error('Latitude or longitude not found in response');
    //       alert("Latitude or longitude not found in response");
    //     }
    
    //   } catch (error) {
    //     console.error(error);
    //   }
  
    //  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    fetchApi(inputValue);
    fetchLocation(inputValue);
  }


  return (
    <div className="Ip-container flex justify-center">
      <div className="Ip-content flex justify-center w-full flex-col">
        <Search handleSubmit={handleSubmit} />
        <Details data={apiData} />
        <Map latitude={userLocation.latitude} longitude={userLocation.longitude} />
      </div>
    </div>
  );
}

export default App;

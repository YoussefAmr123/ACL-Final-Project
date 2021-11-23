import { useState } from "react";

  const handleClick = () => {
    const Allflights = axios.get("C:\Users\hp\OneDrive\Documents\GitHub\ACL-Final-Project\acl\server\routes\flights.js\\");
    const listofflights =  axios.post(Allflights)
                             .then(response => {})
                             .catch(error => console.log(error.toString()))
    return  flightsava = listofflights.map((f) => <li key={f.name}>{f.name}</li>

  };

  return (
    <div className="flightsavailable">
      <h2>Airline Homepage</h2>
      <button onClick={handleClick}>Show All Flights</button>
  );

    </div>
  );
 
export default Home;
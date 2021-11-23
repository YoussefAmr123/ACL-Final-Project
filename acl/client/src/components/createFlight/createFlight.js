import * as React  from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function Create() {
  const [Flight , setFlight] = useState({
    flightNumber : 0, 
    departureTime : 1/1/2000,
    arrivalTime : 1/1/2000,
    economySeats : 0,
    businessSeats : 0 ,
    airport : "noairport" ,
  })

  const CreateFlight = () => {

  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="flight number" variant="outlined" value={Flight.flightNumber} onChange={ (event) => {
        setFlight({...Flights, flightNumber :event.target.value})
      }} />
      <TextField id="outlined-basic" label="departure time" variant="outlined" value = {Flight.departureTime} onChange={ (event) => {
        setFlight({...Flights, departureTime :event.target.value})
      }} />
      <TextField id="outlined-basic" label="arrival time" variant="outlined"  value = {Flight.arrivalTime} onChange={ (event) => {
        setFlight({...Flights, arrivalTime :event.target.value})
      }} />
      <TextField id="outlined-basic" label="economy seats" variant="outlined"  value = {Flight.economySeats} onChange={ (event) => {
        setFlight({...Flights, economySeats :event.target.value})
      }} />
      <TextField id="outlined-basic" label="business seats" variant="outlined"  value = {Flight.businessSeats} onChange={ (event) => {
        setFlight({...Flights, businessSeats :event.target.value})
      }} />
      <TextField id="outlined-basic" label="airport" variant="outlined"  value = {Flight.airport} onChange={ (event) => {
        setFlight({...Flights, airport :event.target.value})
      }} />
      <Button variant="contained" color="primary" onClick={CreateFlight}>
        Create A Flight</Button>
    </Box>
  );
}
import * as React from 'react';
import {useState , useEffect , useStyles} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function ShowFlight() {
    const classes = useStyles();

    const [flightslist , setFlightList]= useState([])

    useEffect(()=> {axios.get("http://localhost:5000/Flight").then( (allFlights) =>{
        setFlightList(allFlights.data);
    })

}, [])
  return (
      <>
      <h2>All Flights</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flights</TableCell>
            <TableCell align="right">Flight No</TableCell>
            <TableCell align="right">Departure Time</TableCell>
            <TableCell align="right">Arrival Time</TableCell>
            <TableCell align="right">Economy Seats</TableCell>
            <TableCell align="right">Business Seats</TableCell>
            <TableCell align="right">Airport</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flightslist.map((flights , key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {flights.flightNumber}
              </TableCell>
              <TableCell align="right">{flights.departureTime}</TableCell>
              <TableCell align="right">{flights.arrivalTime}</TableCell>
              <TableCell align="right">{flights.economySeats}</TableCell>
              <TableCell align="right">{flights.businessSeats}</TableCell>
              <TableCell align="right">{flights.airport}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

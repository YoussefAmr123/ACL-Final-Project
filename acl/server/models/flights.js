import mongoose from 'mongoose';

const FlightSchema = mongoose.Schema({
    flightNumber : Number, 
    departureTime : Date,
    arrivalTime : Date,
    economySeats : Number ,
    businessSeats : Number ,
    airport : String ,
    
});

const flight = mongoose.model('flight', FlightSchema);
export default flight;
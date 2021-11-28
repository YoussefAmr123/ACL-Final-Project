import mongoose from 'mongoose';

const FlightSchema = mongoose.Schema({
    flightNumber : Number, 
    departureTime : Number,
    arrivalTime : Number,
    economySeats : Number ,
    businessSeats : Number ,
    airport : String ,
    
});

const flight = mongoose.model('flight', FlightSchema);
export default flight;
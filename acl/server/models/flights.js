import mongoose from 'mongoose';

const FlightSchema = mongoose.Schema({
    From : String,
    To : String,
    FlightDate : Date ,
    Cabin : String ,
    Seats : Number ,
    section: {
        type: String ,
        default: 'A'
    } 
});

const flight = mongoose.model('flight', FlightSchema);
export default flight;
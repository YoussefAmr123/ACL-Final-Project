import FlightData from "../models/flights.js";
// here we write the bodies of the gets and posts
export const getFlights = async (req,res) => {
    try {
        const allFlights = await FlightData.find();//await is because the request takes time (same for async) 
        res.status(200).json(allFlights);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}
export const createFlight = async (req,res) => {
    const addedFlight = req.body;//get the new flight details
    const newFlight = new FlightData(addedFlight);
    try {
       await newFlight.save();
       res.status(201).json(newFlight);
    } catch (error) {
        res.status(409).json ({message : error.message});
    }
}
export const DeleteFlight = async (req,res) => {
    const deletedflight = req.params.flightNumber;

    try {
     await (await flight.findByIdAndRemove(flightNumber)).exec();
     res.send('successfully deleted');
    } catch (error) {
        
    }
}
import user from "../models/user.js";

export const getUser = async (req,res) => {
    try {
        const allUsers = await user.find();//await is because the request takes time (same for async) 
        
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const createUser = async (req,res) => {
    const addedUser = req.body;//get the new user details
    const newUser = new user(addedUser);
    try {
       await newUser.save();
       res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json ({message : error.message});
    }
}

export const viewAllFlights =  async (req,res) => {
    const addedFlight = req.body;
   // const newflight = new flight(added flight);//
}
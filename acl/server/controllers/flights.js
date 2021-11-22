import flight from "../models/flights.js";
// here we write the bodies of the gets and posts
export const getFlights = async (req,res) => {
    try {
        const allFlights = await flight.find();//await is because the request takes time (same for async) 
        
        res.status(200).json(allFlights);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}
export const createFlight = async (req,res) => {
    const addedFlight = req.body;//get the new flight details
    const newFlight = new flight(addedFlight);
    try {
       await newFlight.save();
       res.status(201).json(newFlight);
    } catch (error) {
        res.status(409).json ({message : error.message});
    }
}

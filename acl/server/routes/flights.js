import express from "express";
import { getFlights ,createFlight} from "../controllers/flights.js";
import flight from "../models/flights.js";

//here we handle all the gets and posts
const router = express.Router();

router.get('/',getFlights);
router.post('/',createFlight);


export default router;
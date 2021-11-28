import express from "express";
import { getFlights ,createFlight , DeleteFlight} from "../controllers/flights.js";
import flight from "../models/flights.js";
import { getUser , createUser } from "../controllers/flights.js";
import user from "../models/user.js";

//here we handle all the gets and posts
const router = express.Router();

router.get('/get',getFlights);
router.post('/create',createFlight);
router.delete('/delete',DeleteFlight);

router.get('/getuser',getUser);
router.post('/createuser',createUser);


export default router;
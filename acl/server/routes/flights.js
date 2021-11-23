import express from "express";
import { getFlights ,createFlight} from "../controllers/flights.js";
import flight from "../models/flights.js";

import { getUser , createUser } from "../controllers/flights.js";
import user from "../models/user.js";

//here we handle all the gets and posts
const router = express.Router();

router.get('/',getFlights);
router.post('/',createFlight);

router.get('/',getUser);
router.post('/',createUser);


export default router;
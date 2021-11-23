import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import flightroutes from './routes/flights.js';


const app = express();
app.use('/flights',flightroutes);

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://javascriptmaher:maher123@cluster0.sds4o.mongodb.net/Cluster0?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true , useUnifiedTopology:true
}).then(() => app.listen(PORT , () => console.log(`Connection is established and running on port: ${PORT}`)))
.catch((err) => console.log(err.message));


//mongoose.set('useFindAndModify',false);//this shoud work but i dont know why it doesnt work for me
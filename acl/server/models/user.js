import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    homeAddress : String ,
    countryCode : Number ,
    telephoneNumber : [String] ,
    email : String,
    passportNumber : Number 
});

const user = mongoose.model('user', userSchema);
export default user;
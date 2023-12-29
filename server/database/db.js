import mongoose from 'mongoose';


const  DBconnection=async()=>{
const DB_URL=`mongodb+srv://sukhada:120B1B248@file-sharing.cp4erkf.mongodb.net/?retryWrites=true&w=majority`;

    try{
        //creating connection with mongoDB
       await mongoose.connect(DB_URL,{useNewUrlParser:true});
        console.log('Database connected successfully')

    }
    catch(error)
    {
        console.error('Error while connecting the database', error.message);
    }
}
export  default DBconnection;
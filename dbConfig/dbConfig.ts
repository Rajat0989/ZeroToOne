import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connnected', () => {
            console.log("Connected to Mongo DB");
        });

        connection.on('error', (err) => {
            console.log('Mongo DB connection error ' + err);
            process.exit();
        })
    }catch(error){
        console.log("Error connecting to Database");
        console.log(error);
    }
}
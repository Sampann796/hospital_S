import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}

app.get('/', (req,res) =>{
     res.send('Api is working')
});
// database connection
mongoose.set('strictQuery', false)
const connectDB = async () =>{
    try {

        console.log("MONGO_URL:", process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL)

        console.log('MongoDB database is connected')
    } catch (error) {
        console.log('MongoDB database is connection failed')
        console.log(error);
    }
}

// middleWare
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth' , authRoute) // domain/api/v1/auth/register


app.listen(port, () => {
    connectDB();
    console.log('Server is running on port' + port)
})
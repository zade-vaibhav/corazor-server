import Express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRout.js'
import cors from 'cors'


// config env
dotenv.config();

// config database
connectDB();

// rest object
const app = Express();

// middleware
app.use(cors());
app.use(Express.json());

// routes
app.use('/api/v1/auth', authRoutes)

// rest api
app.get('/', (req, res) => {
    res.json('Welcome to corazor');
})

// port
const PORT =  process.env.PORT;

// rull listen
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})
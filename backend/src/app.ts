import express, {Application} from "express";
import authRoutes from "./routes/auth.route";
import dotenv from 'dotenv';
dotenv.config();



const app: Application = express();


app.set('port', process.env.PORT);


// define routes
app.use("/auth", authRoutes);

export default app;

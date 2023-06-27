import express, {Application} from "express";
import authRoutes from "./routes/auth";
import dotenv from 'dotenv';
dotenv.config();



const app: Application = express();


app.set('port', process.env.PORT);

app.use(authRoutes);

export default app;

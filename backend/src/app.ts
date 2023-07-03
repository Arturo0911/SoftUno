import express, {Application} from "express";
import authRoutes from "./routes/auth.route";
import visitorRouter from "./routes/visitor.route";
import userRouter from "./routes/user.route";
import dotenv from 'dotenv';
import morgan from 'morgan';



dotenv.config();



const app: Application = express();


app.set('port', process.env.PORT);
app.use(express.json());
app.use(morgan('dev'));
// define routes
app.use("/auth", authRoutes);
app.use("/visitor", visitorRouter);
app.use("/user", userRouter);

export default app;

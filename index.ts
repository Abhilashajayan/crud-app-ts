import express from 'express';
import cors from 'cors';
import nocache from 'nocache';
import { config } from 'dotenv';
import  connectToMongoDB  from './config/database';
import userRouter from './routes/userRouter';
import adminRouter from './routes/adminRouter';

config(); 
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(
  cors({
    origin: [`http://localhost:5173`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(nocache());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToMongoDB();
app.use('/',userRouter)
app.use('/admin',adminRouter);
app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});

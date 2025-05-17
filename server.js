import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/product.js'; // ✔️ لازم يكون فيه الامتداد .js




 const Port = process.env.PORT || 3002;


const app  = express();
dotenv.config();
app.use(cors());
// app.use(express.json());

 app.listen(Port, () => {
   console.log(`Server is running on port ${Port}`);
 });
app.use('/', productRoutes);



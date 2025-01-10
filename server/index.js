import express  from 'express';
import cors from 'cors';
import cookie from "cookie-parser";
import indexRoutes from './router/index.routes.js';

const app = express();
const port = 3000;
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookie());
app.use(express.json());
app.use(indexRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Imports
import express, {Router} from "express";
import dotenv from "dotenv";
import router from './routes/router.js'
import cors from 'cors';



// configuration
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));


// auto access static folders so we can use /css/code.css
app.use(express.static("public"));
// app.use(express.json())
app.use(cors({
  origin : '*'
}))

// Routes
app.use('/' ,router)


app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});

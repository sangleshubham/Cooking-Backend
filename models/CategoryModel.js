import mongoose from "mongoose";
import "./databaseConenction.js";

const categorySchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : 'Enter Name'
        },
        path : {
            type: String,
            required : 'Path not founf for category'
        },
        img : {
            type : String,
            required : 'you missed img url'
        }
    }
)


export default mongoose.model( 'Category' , categorySchema)




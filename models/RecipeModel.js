import mongoose from "mongoose";
import "./databaseConenction.js";

const recipeSchema = new mongoose.Schema(
    {
        Name : {
            type : String,
            required : 'Enter Name'
        },
        Description : {
            type: String,
            default: 'Food Recipe'
            
        },
        Author : {
            type : String,
        },
        Ingredients : {
            type : Array,
            required : 'Ingredients Required'
        },
        Method : {
            type : Array,
            required : 'Ingredients Required'
        },
        category : {
            type : String,
            default: 'Indian'
        },
        image : {
            type : String,
            required : 'Image Required',
            default: 'indian-food.jpg'
        },
        url : {
            type : String,
            required : 'path Required'
        },
    }
)


export default mongoose.model( 'Recipe' , recipeSchema)




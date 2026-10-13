import mongoose from "mongoose";


const productShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:String
},{timestamps:true});


const Product = mongoose.model("Products",productShema);


export default Product;
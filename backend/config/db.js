import mongoose from "mongoose";

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://tomatofooddeliveryapp:NomiBhai456@cluster0.ciex65w.mongodb.net/food-del").then(()=>{console.log("DB Connected")})
}

export default connectDB
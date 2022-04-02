import mongoose from "mongoose"

// Establishing connection between database of mongodb via mongoose

const connectDB = handler => async(req, res) =>{
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    // MONGO_URI is in .env.local where database link is stored
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req, res)
}

export default connectDB;
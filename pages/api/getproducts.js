import Product from "../../models/Product";
import connectDB from "../../middleware/mongoose";

// http://localhost:3000/api/getproducts use this url to get database from mongoDB
const handler = async (req, res) => {
    // In mongo find() method returns all databases
    let products = await Product.find()
    res.status(200).json({ products })
}

export default connectDB(handler)
import Product from "../../models/Product";
import connectDB from "../../middleware/mongoose";

// http://localhost:3000/api/getproducts use this url to get database from mongoDB
const handler = async (req, res) => {
    // In mongo find() method returns all databases
    let products = await Product.find()
    let tshirts = {}

    for(let item of products){
        if(item.title in tshirts){
            // Here we are matching title as unique and pushing it in same JSON object with different color, Because all 
            // other properties are same
            if(!tshirts[item.title].color.includes(item.color) && item.availableQty > 0){
                tshirts[item.title].color.push(item.color)
            }
            // doing same for the size
            if(!tshirts[item.title].size.includes(item.size) && item.availableQty > 0){
                tshirts[item.title].size.push(item.size)
            }
        }else{
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty > 0){
                tshirts[item.title].color = [item.color]
                tshirts[item.title].size = [item.size]
            }
        }
    }
    res.status(200).json({ tshirts })
}

export default connectDB(handler)
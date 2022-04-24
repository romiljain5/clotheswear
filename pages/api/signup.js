import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

// for adding user via post request which we can generate with thunder client post request to
// http://localhost:3000/api/signup this url
const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    const {email, name} = req.body
    let u = new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, 'secret123').toString()});
    await u.save();

    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDB(handler);

import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

// for adding user via post request which we can generate with thunder client post request to
// http://localhost:3000/api/signup this url
const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    let user = await User.findOne({"email": req.body.email})
    // decrypting saved password and comparing via crypto-js
    var bytes = CryptoJS.AES.decrypt(user.password, 'secret123');
    var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
    if(user){
        if(req.body.email == user.email && req.body.password == decryptedPass){
            res.status(200).json({ success: true, email: user.email, name: user.name });
        }else{
            res.status(200).json({ success: false, error: "Invalid Credentials" });
        }
    }else{
        res.status(200).json({ success: false, error: "No user found" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDB(handler);

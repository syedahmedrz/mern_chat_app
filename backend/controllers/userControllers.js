const User =  require("../models/userModels");
const generateToken = require("../config/generateToken");

const registerUser = async (req, res) => {
    const { name, email, password, pic } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const userExists = await User.findOne({ email: email });
    if (userExists) {
        res.status(400);
        throw new Error("User alerady available")
    }

    const user = await User.create(req.body);

    if (user) {
        user["password"] = undefined;
        res.status(200).json({
            ...user["_doc"],
            "token": generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Failed to connect new user")
    }

}

module.exports={registerUser}


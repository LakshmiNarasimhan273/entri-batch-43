const userModel = require("../models/users.model");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// registerAPI
const registerApi = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // email check
        const emailCheck = await userModel.findOne({ email });

        if (emailCheck) {
            return res.status(400).json({ message: "User account exists" });
        }

        // salt number -  10(recommended) or 12
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create(
            {username, email, password: hashedPassword}
        );
        
        res.status(201).json(newUser);

    } catch (err) {
        res.status(500).json({ message: "User account creation failed" });
    }
}

module.exports = {registerApi};
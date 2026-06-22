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
            { username, email, password: hashedPassword }
        );

        res.status(201).json(newUser);

    } catch (err) {
        res.status(500).json({ message: "User account creation failed" });
    }
};

const loginApi = async (req, res) => {
    try {
        // login logic

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User account not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid Password" });
        };

        // user login token generation
        // jwt token generation

        // 3 parameter rule
        // 1) token details (payload: user informations)
        // 2) secret key
        // 3) expiry time

        // Interview
        const token = jwt.sign(
            { userId: user._id, username: user.username, email: user.email },
            process.env.jwt_secret,
            { expiresIn: '24h' }
        );

        res.status(200).json({ message: "Login Successful", token });

    } catch (err) {
        res.status(500).json({ message: "User login failed" });
    }
}

module.exports = { registerApi, loginApi };
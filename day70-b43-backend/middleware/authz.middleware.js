const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    try{
        // step - 1
        // requesting the token from headers
        const authHeaders = req.headers.authorization;
        // Bearer adgnaladsva,djgbakjdgb

        if(!authHeaders || !authHeaders.startsWith("Bearer ")){
            return res.status(401).json({message: "unauthorized: Token not found"});
        }

        const token = authHeaders.split(" ")[1];
        
        // step - 2
        const decoded = jwt.verify(token, process.env.jwt_secret);
        
        // step - 3
        req.userId = decoded.userId;

        next();

    }catch(err){
        res.status(401).json({message: "unauthorized: Invalid token"});
    }
};

module.exports = authMiddleware;
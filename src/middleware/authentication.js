require("dotenv").config();
const jwt = require("jsonwebtoken");


const rightToken = (token) => {
    return new Promise((resolve, reject) => {


        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            return resove(decoded);
        })
    })
}


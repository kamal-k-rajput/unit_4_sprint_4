require("dotenv").config();
const jwt = require("jsonwebtoken");

const rightToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      return resove(decoded);
    });
  });
};

const authenticated = async (req, res) => {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ message: "authorization token not found or incorrect" });
  }

  if (!req.headers.authorization.startsWith("Bearer ")) {
    return res.status(403).send({
      message: "authorization token not found or incorrect",
    });
  }

  const token = req.headers.authorization.trim().split(" ")[1];

  let decoded;
  try {
    decoded = await rightToken(token);
  } catch (err) {
    return res.send({
      message: err.message,
      error: "authorization token not found or incorrect",
    });
  }

  req.userID = decoded.user._id;
  return next();
};

module.exports = authenticated;

require("dotenv").config();

const jwt = require("jsonwebtoken");

const generateAccessToken = async (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET);
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.sendStatus(403);
    req.body["user_id"] = user.userId;
    next();
  });
};

module.exports = {
  generateAccessToken,
  authenticateToken,
};

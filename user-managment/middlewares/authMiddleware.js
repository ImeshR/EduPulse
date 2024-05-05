import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export const authenticateUser = (req, res, next) => {
  // Extract token from request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Remove Bearer from token
  const tokenString = token.split(" ");
  const NoBtoken = tokenString[1];


  // Verify token
  jwt.verify(NoBtoken, jwtSecret, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(403).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  });
};

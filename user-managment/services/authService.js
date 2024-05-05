import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  console.error("JWT_SECRET is not defined in the environment variables.");
  process.exit(1);
}

const registerUser = async (userData) => {
  try {
    const { username, password, role } = userData;

    // Check if user already exists
    const user = await User.findOne({ username });

    if (user) {
      return { error: "User already exists" };
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();
    return { id: newUser._id, username: newUser.username, role: newUser.role };
  } catch (error) {
    throw new Error("Failed to register user");
  }
};

const loginUser = async (username, password) => {
  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Invalid username or password");
    }
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid username or password");
    }
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      jwtSecret,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

export { registerUser, loginUser };

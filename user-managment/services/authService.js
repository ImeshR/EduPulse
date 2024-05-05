import User from "../models/Users.js";
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
    const { firstName, lastName, email, password, role } = userData;

    // Check if user already exists
    const user = await User.findOne({ email: userData.email });

    if (user) {
      return { error: "User already exists" };
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: hashedPassword,
      role: role || "user",
    });
    return { id: newUser._id, username: newUser.username, role: newUser.role };
  } catch (error) {
    throw new Error("Failed to register user");
  }
};

const loginUser = async (email, password) => {
  try {
    // Find user by username
    const user = await User.findOne({ email });
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
      {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
      jwtSecret,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

export { registerUser, loginUser };

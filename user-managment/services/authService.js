import User from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sendEmail } from "./emailService.js";

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
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    //send email to user
    const subject = "Registration Successful";
    const text = `Welcome ${firstName} ${lastName}, you have successfully registered.`;
    const html = `
                  <html>
                   <head>
                      <title>Registration Successful</title>
                   </head>
                    <body>
                      <h1>Welcome ${firstName} ${lastName} to EduPulse!</h1>
                      <p>Your registration was successful.</p>
                      <p>Thank you for signing up!</p>
                    </body>
                  </html>
    `;
    await sendEmail(email, subject, text, html);

    return {
      user: await newUser.save(),
      message: "User registered successfully",
    };
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

    try {
      //send email to user
      const subject = "Login Successful";
      const text = `Welcome ${user.firstName} ${user.lastName}, you have successfully logged in.`;
      const html = `
                  <html>
                   <head>
                      <title>Login Successful</title>
                   </head>
                    <body>
                      <h1>Welcome ${user.firstName}  to EduPulse!</h1>
                      <p>Your login was successful.</p>
                    </body>
                  </html> 
    `;
      await sendEmail(email, subject, text, html);
    } catch (error) {
      console.log("Failed to send email");
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

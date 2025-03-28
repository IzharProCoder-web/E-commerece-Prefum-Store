const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/user");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: "User already exists. Please login.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful",
      success: true,
      data: { id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    if (err.code === 11000) { // MongoDB duplicate key error
      return res.status(409).json({
        message: "User already exists. Please login.",
        success: false,
      });
    }
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Authentication failed: User not found",
        success: false,
      });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(401).json({
        message: "Authentication failed: Incorrect password",
        success: false,
      });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
        algorithm: "HS256",
      }
    );

    res.status(200).json({
      message: "Login successful",
      success: true,
      data: {
        token,
        userId: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  signup,
  login,
};

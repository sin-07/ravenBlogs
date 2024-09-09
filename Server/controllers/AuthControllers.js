const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if password is provided
  if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });
  }

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    // Log password value
    console.log("Password:", password);

    const securePassword = await bcrypt.hash(password, 10);
    user = await User.create({ username, email, password: securePassword });
    console.log(user)
    await user.save();

    return res.status(201).json({ success: true, message: "User created" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  // Check if password is provided

  try {
    let user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Ensure user.password exists before comparing

    const isMatch = await bcrypt.compare(password, user.password);

    // Check if passwords match
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json({ success: true, message: "Logged in" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const checkAuth = async (req, res) => {
  const id = req.id;
  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "User fetched", user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { signup, login, checkAuth };

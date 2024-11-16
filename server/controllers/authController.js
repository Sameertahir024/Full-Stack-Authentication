import User from "../model/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT, { expiresIn: "1d" });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "fill all" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User exists" });
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);

    const user = await User.create({ name, email, password: hash });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "fill all" });
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "invalid User" });
    }
  } catch (error) {
    res.status(500).json({ message: " error" });
  }
};

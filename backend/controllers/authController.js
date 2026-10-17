const authService = require("../services/authService");
const generateToken = require("../utils/generateToken");

function publicUser(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof password !== "string" ||
      password.length < 8
    ) {
      return res.status(400).json({
        message: "Enter a valid name, email, and password of at least 8 characters",
      });
    }

    const user = await authService.registerUser({
      name,
      email,
      password,
    });

    res.status(201).json({
      user: publicUser(user),
      token: generateToken(user._id),
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string") {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await authService.loginUser({ email, password });

    res.json({
      user: publicUser(user),
      token: generateToken(user._id),
    });
  } catch (error) {
    next(error);
  }
}

function me(req, res) {
  res.json({ user: publicUser(req.user) });
}

module.exports = { register, login, me };
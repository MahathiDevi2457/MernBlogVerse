const User = require("../models/User");

async function registerUser({ name, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();

  if (await User.findOne({ email: normalizedEmail })) {
    const error = new Error("Email already registered");
    error.statusCode = 409;
    throw error;
  }

  return User.create({
    name: name.trim(),
    email: normalizedEmail,
    password,
  });
}

async function loginUser({ email, password }) {
  const user = await User.findOne({
    email: email.trim().toLowerCase(),
  }).select("+password");

  if (!user || !(await user.comparePassword(password))) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  return user;
}

module.exports = { registerUser, loginUser };
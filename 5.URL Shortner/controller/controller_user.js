import User from "../models/models_users.js";

export async function usersignUp(req, res) {
  const { firstName, email, password } = req.body;

  await User.create({
    firstName,
    email,
    password
  });

  return res.render("user_signin");
}

export async function signupget(req, res) {
  return res.render("user_signin");
}

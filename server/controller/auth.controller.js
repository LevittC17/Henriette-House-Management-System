const { StatusCodes } = require("http-status-codes");
const { model } = require("mongoose");
const authModel = require("../models/auth.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../middlewares/sendEmail");

const SignUp = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    var userExists = await authModel.findOne({ email: email });
    console.log(userExists);

    if (userExists) {
      res.status(401).json({ message: "User already exists" });
    } else {
      const hashedPassword = bcryptjs.hashSync(password, 10);

      var newUser = new authModel({
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
      });

      var savedUser = await newUser.save();
      res.status(201).json({ message: "Account created successfully" });
      // var subject = "Welcome to our website";
      // var message = "You have signed up successfully";
      // var a = "tracuna005@gmail.com";
      // await sendEmail(a, subject, message);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const SignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await authModel.findOne({ email: email });

    if (!validUser)
      return res.status(500).json({ message: "Wrong password or email!" });

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return res.status(500).json({ message: "Wrong password or email!" });

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

    const { password: hashedPassword, ...rest } = validUser._doc;

    const expiryDate = new Date(Date.now() + 3600000); // 1 hour

    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({ 
        user: rest, 
        token: token, 
        message: "Login successful" 
      });
      
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const ForgotPassword = async (req, res, next) => {
  try {
    const validUser = await authModel.findOne({ email: req.body.email });
    if (!validUser) return next(errorHandler(401, "Invalid email"));

    var token = jwt.sign({ email: req.body }, process.env.JWT_SECRET_KEY, {
      expiresIn: 1200,
    });

    var recoveryLink = `http://localhost:3000/reset-password/${token}/${validUser._id}`;

    sendEmail(validUser.email, "Reset Password", recoveryLink);

    res
      .status(200)
      .json({ message: `Password reset link sent to your email!` });
  } catch (error) {
    // next(errorHandler(error));
    res.status(500).json(error.message);
  }
};
const update = async (req, res, next) => {
  try {
    var id = req.query.id;
    var toUpdate = await authModel.findByIdAndUpdate({ _id: id }, req.body);
    console.log(toUpdate);
    res.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const remove = async (req, res, next) => {
  try {
    var deletedProperty = await authModel.findByIdAndDelete(req.query.id);
    if (deletedProperty) {
      res.status(200).json({
        message: "This property has been deleted successfully",
      });
    } else {
      res.status(404).send("This house is not found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  SignUp,
  SignIn,
  ForgotPassword,
  update,
  remove,
};

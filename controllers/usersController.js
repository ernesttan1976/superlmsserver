const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const faker = require('faker');
const JWT_SECRET = process.env.JWT_SECRET;
const SALT_ROUNDS = 6;

const create = async (req, res) => {
  const { password } = req.body;
  if (password.length < 5) {
    res.status(400).json({ message: "Password is too Short, Please Try Again." });
    return;
  }

  try {
    const user = await User.create(req.body);
    if (!user.avatar) {
      user.avatar = faker.image.avatar();
    }
    const payload = { user };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 60 }); // 1hr
    res.status(201).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (password.length < 5) {
    res.status(400).json({ message: "Incorrect Password" });
    return;
  }

  try {
    const user = await User.findOne({ email });
    if (user === null) {
      res.status(401).json({ message: "No user found, Please sign up." });
      return;
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const payload = { user };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 60 });
      res.status(200).json({ token });
      console.log("user login successful");
    } else {
      res.status(401).json({ message: "Wrong password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const seed = async (req, res) => {
  try {
    await User.deleteMany({});

    const userItems = [];

    const RandomAvatar =()=>`https://i.pravatar.cc/100?img=${Math.floor(Math.random()*70)+1}`

    const adminUser = new User({
      name: `admin`,
      email: `admin@ga.co`,
      password: await bcrypt.hash(`admin`, SALT_ROUNDS),
      userRole: 'Admin',
      avatar: RandomAvatar(),
    });
    userItems.push(adminUser);

    for (let i = 1; i < 6; i++) {
      const instructorUser = new User({
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: `instructor${i}@ga.co`,
        password: await bcrypt.hash(`instructor${i}`, SALT_ROUNDS),
        userRole: 'Instructor',
        avatar: RandomAvatar(),
      });
      userItems.push(instructorUser);
    }

    for (let i = 1; i < 61; i++) {
      const userItem = new User({
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: `student${i}@ga.co`,
        password: await bcrypt.hash(`student${i}`, SALT_ROUNDS),
        userRole: 'Student',
        avatar: RandomAvatar(),
      });
      userItems.push(userItem);
    }

    const users = await User.create(userItems);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const index = async (req, res) => {
  try {
    const {_start, _end}=req.query;
    console.log(req.query, _start, _end)
    if (_start || _end){
      const page = _start+1; // the page number you want to fetch
      const limit = _end-_start; // the number of documents per page
      const skip = (page-1) * limit;
      User.find({}).skip(skip).limit(limit).populate('courses_id')
        .then(foundUsers=>{
          res.status(200).json(foundUsers);
         })
         .catch(error=>{
          res.status(400).json({ error: error.message });
         })
    } else {
      const foundUsers = await User.find({});
      res.status(200).json(foundUsers);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const user= await User.findById(req.params.id).populate("courses_id");
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  login,
  seed,
  index,
  show,
  delete: deleteUser,
  update,
};

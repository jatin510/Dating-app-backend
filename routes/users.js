const express = require("express");
const router = express.Router();

const User = require("../models/user");

// Find all the users
router.get("/", async (req, res) => {
  const { page = 1, limit = 3 } = req.query;

  try {
    // execute query with page and limit values
    const users = await User.find().limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // get total documents in the Posts collection 
    const count = await User.countDocuments();

    // return response with posts, total pages, and current page
    res.json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});

// Find a user by Id
router.get("/:id",getUser ,async (req, res) => {
  try {
    res.status(200).json(res.user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a user
router.post("/", async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  });

  try {
    const newuser = await user.save();
    res.status(200).json(newuser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a user
router.patch("/:id", getUser ,async (req, res) => {
  if (req.body.first_name != null) {
    res.user.first_name = req.body.first_name;
  }
  if (req.body.last_name != null) {
    res.user.last_name = req.body.last_name;
  }
  if (req.body.first_name != null) {
    res.user.email = req.body.email;
  }

  try {
    const updatedUser = await res.user.save();
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a user
router.delete("/:id", getUser,async (req, res) => {
  try {
    await res.user.remove();
    res.status(200).json({message: "User successfully deleted"})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

// function to find a user
async function getUser(req,res,next){
  let user;
  try{
    user = await User.findById(req.params.id)
    if (user == null){
      return res.status(404).json({message: "User not found"})
    }
  }
  catch(err){
    res.status(500).json({message: err.message})
  }
  res.user = user;
  next();
}

module.exports = router;

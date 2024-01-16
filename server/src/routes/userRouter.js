const express = require('express');
const { getAllUsers, addUser, editUser, deleteUser } = require('../controllers/userController');
const router = express.Router()

router.get("/users", getAllUsers);
router.post("/users", addUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

module.exports = router;


// router.use("/users", { users: ["userOne", "userTwo", "userThree"] })

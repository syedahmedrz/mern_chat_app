const express = require("express");
const {
    registerUser
} = require("../controllers/userControllers")
const authUser= require("../controllers/authUser")

const router = express.Router();

router.post('/', registerUser);
router.post('/login', authUser)

module.exports = router;
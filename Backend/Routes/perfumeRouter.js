const { signup, login } = require("../Controllers/perfumeController.js");
const { signupValidation, loginValidation } = require("../Middleware/perfumeValidation.js");

const router = require("express").Router();



router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

module.exports = router;

const { login } = require("../controllers/loginControl");
const { register } = require("../controllers/registerControl");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;

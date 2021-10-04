const express = require("express");
const { userRegister, userLogin } = require("../controllers/user.controller");
const { validator, registerRules } = require("../middleware/validator");

const isAuth = require("../middleware/passport-setup");

const router = express.Router();
//*Route authentication user
router.post("/register", registerRules(), validator, userRegister);
router.post("/login", userLogin);
router.get(`/current`, isAuth(), (req, res) => res.json(req.user));


module.exports = router;

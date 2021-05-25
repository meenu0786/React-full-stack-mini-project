const router = require("express").Router();

const UserController = require("../controllers/userController");

//**User route start */
router.post("/sign-up", UserController.sign_up);
router.post("/login", UserController.login);
//**User route end */

module.exports = router;

const router = require("express").Router();

const { authenticateToken } = require("../auth/auth");
const CatContoller = require("../controllers/catController");
const UserController = require("../controllers/userController");

//**User route start */
router.post("/sign-up", UserController.sign_up);
router.post("/login", UserController.login);
//**User route end */

//**cat route start */
router.post("/add-category", authenticateToken, CatContoller.addCat);
router.post("/edit-category/:id", authenticateToken, CatContoller.editCat);
router.delete(
  "/delete-category/:id",
  authenticateToken,
  CatContoller.deleteCat
);

//**cat route end */
module.exports = router;

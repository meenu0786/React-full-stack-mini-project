const router = require("express").Router();

const { authenticateToken } = require("../auth/auth");
const CatContoller = require("../controllers/catController");
const ExpensesController = require("../controllers/expensesController");
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

//**expenses route start */
router.post("/add-expenses", authenticateToken, ExpensesController.add);
router.patch("/edit-expenses/:id", authenticateToken, ExpensesController.edit);
router.delete(
  "/delete-expenses/:id",
  authenticateToken,
  ExpensesController.delete
);
router.get("/expenses", authenticateToken, ExpensesController.list);

//**expenses route end */
module.exports = router;

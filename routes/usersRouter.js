const userController = require("../controllers/usersController");
const express = require("express");
const router = express.Router();
// (/api/users)
router.get("/", userController.index);
router.post("/", userController.create);
router.post("/login", userController.login);
router.get("/seed", userController.seed);
router.get("/:id", userController.show);
router.delete("/:id", userController.delete);
router.put("/:id", userController.update);

module.exports = router;

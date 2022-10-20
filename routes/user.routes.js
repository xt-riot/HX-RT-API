const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");

router.get("/user", controller.getUser);
router.post("/user", controller.createUser);
router.put("/user", controller.updateUser);
router.delete("/user", controller.deleteUser);

module.exports = router;

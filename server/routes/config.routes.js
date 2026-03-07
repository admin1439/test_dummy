const router = require("express").Router();
const controller = require("../controllers/config.controller");

router.get("/", controller.getConfig);

module.exports = router;

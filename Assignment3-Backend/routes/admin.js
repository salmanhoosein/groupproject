const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

//if user is authenticated

// /admin/test => GET
router.get("/test", adminController.getTesting);

module.exports = router;

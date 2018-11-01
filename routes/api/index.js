const router = require("express").Router();
const bookRoutes = require("./book");

// Article routes
router.use("/books", bookRoutes);

module.exports = router;

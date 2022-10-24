const router = require("express").Router();


router.use("/users", require("./module/users/route"));


module.exports = router;

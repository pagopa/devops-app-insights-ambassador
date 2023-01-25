const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("status -> ok")
    res.status(200).send("ok")
});

module.exports = router;

const router = require("express").Router();

const itemRoute = require("./item/item.routes");

router.use("/item", itemRoute);


module.exports = router;

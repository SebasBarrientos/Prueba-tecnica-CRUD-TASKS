const express = require ("express")
const TodoControlleer = require("../controllers/TodoController")
const router = express.Router()

router.post ("/", TodoControlleer.create)

module.exports = router;

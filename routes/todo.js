const express = require ("express")
const TodoControlleer = require("../controllers/TodoController")
const router = express.Router()

router.post ("/", TodoControlleer.create)
router.get ("/", TodoControlleer.getAll)
router.get ("/id/:_id", TodoControlleer.getById)
router.put("/completed/:_id", TodoControlleer.todoCompleted);
router.put("/update/:_id", TodoControlleer.update);
router.delete("/id/:_id", TodoControlleer.delete);


module.exports = router;

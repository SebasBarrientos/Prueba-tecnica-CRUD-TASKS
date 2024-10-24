const express = require ("express")
const TodoControlleer = require("../controllers/TodoController")
const router = express.Router()

router.post ("/post", TodoControlleer.create)
router.get ("/all", TodoControlleer.getAll)
router.get ("/id/:_id", TodoControlleer.getById)
router.put("/complete/:_id", TodoControlleer.todoCompleted);
router.put("/id/:_id", TodoControlleer.update);
router.delete("/filter", TodoControlleer.deleteFilteredTasks);
router.delete("/id/:_id", TodoControlleer.delete);
router.get ("/filter", TodoControlleer.getFilteredTasks)
router.put("/filter/complete", TodoControlleer.markDoneByCategoriesOrTitles);


module.exports = router;

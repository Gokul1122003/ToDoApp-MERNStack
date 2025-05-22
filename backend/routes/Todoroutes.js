const { Router } = require("express")
const { getToDo, saveTodo, todoupdate, tododelete } = require("../controllers/Todocontroller")

const router = Router()

router.get('/', getToDo)
router.post('/save', saveTodo)
router.post('/update', todoupdate)
router.post('/delete', tododelete)

module.exports = router

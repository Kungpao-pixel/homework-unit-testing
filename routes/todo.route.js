const router = require('express').Router();
const  todoController  = require('../controller/todo.controller.js');


router.get('/', todoController.findAll);
router.get('/:id', todoController.findByPk);
router.post('/', todoController.create);
router.delete('/:id', todoController.destroy);

module.exports = router

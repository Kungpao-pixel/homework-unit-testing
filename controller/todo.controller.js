const todoService = require('../services/todo.service.js')
const { Todo } = require('../models')


class todoController {
    static findAll = async (req, res, next) => {
        try {
            const todo = await todoService.findAll(req.query);

            res.status(200).json(todo)
        } catch (error) {
            next(error)
        }
    }
    

    static findByPk = async (req, res, next) => {
        try {
            const todo = await Todo.findByPk(req.params.id);
            if(!todo) {
                return res.status(500).json({message: "todo not found"})
            }
        } catch (error) {
            next(error)
        }
    }

    static create = async (req, res, next) => {
        try {
            const todos = await Todo.create(req.body);

            res.json(todos)
        } catch (error) {
            next(error)
        }
    }

    static destroy = async (req, res, next) => {
        try {
            const todo = await Todo.findByPk(req.params.id);
            if (!todo) {
                return res.status(500).json({ message: 'Todo not found' });
            }
            await todo.destroy(); 
            res.status(200).end();
        } catch (error) {
            next(error);
        }
    };
}

module.exports = todoController

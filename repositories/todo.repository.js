const { Todo } = require('../models')

class todoRepository {
    static findAll = async (params) => {
        try {
            const todo = await Todo.findAll(params);
            return todo;
        } catch (error) {
            throw(error)
        }
    };

    static findByPk = async (id) => {
        try {
            const todo = await Todo.findByPk(id);
            return todo;
        } catch (error) {
            throw error;
        }
    };

    static create = async (todoData) => {
        try {
            const todo = await Todo.create(todoData);
            return todo;
        } catch (error) {
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const todo = await Todo.findByPk(id);
            if (!todo) {
                throw new Error('Todo not found');
            }
            await todo.destroy();
        } catch (error) {
            throw error;
        }
    };
}

module.exports = todoRepository
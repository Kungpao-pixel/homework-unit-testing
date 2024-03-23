const todoRepository = require('../repositories/todo.repository.js');

class todoService {
    static findAll = async (params) => {
        try {
            const todo = await todoRepository.findAll(params)

            return todo;
        } catch (error) {
            throw(error)
        }
    };

    static findByPk = async (id) => {
        try {
            const todo = await todoRepository.findByPk(id);
            return todo;
        } catch (error) {
            throw error;
        }
    };

    static create = async (todoData) => {
        try {
            const createdTodo = await todoRepository.create(todoData);
            return createdTodo;
        } catch (error) {
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            await todoRepository.delete(id);
        } catch (error) {
            throw error;
        }
    };
}


module.exports = todoService
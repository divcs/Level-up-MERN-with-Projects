const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getTodo(req, res) {
    const todos = await prisma.todo.findMany()
    res.send(todos);
}

function getTodoById(req, res) {
    res.send('Hello World!');
}

function createTodo() {
    res.send('Hello World!');
}

function updateTodo() {
    res.send('Hello World!');
}

function deleteTodo() {
    res.send('Hello World!');
}

module.exports = {
    getTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}
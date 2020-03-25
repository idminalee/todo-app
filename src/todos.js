import uuidv4 from 'uuid/v4'
import { renderTodos } from './views';

let todos = []

// Read existing todos from localStorage
const loadTodos = () => {
    const todoJSON = localStorage.getItem('todos')

    try {
        todos = todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        todos = []
    }
}

// Save the todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text: text,
        completed: false
    })
    saveTodos()
}

// Remove Todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()

// Make sure to call loadTodos and setup the exports
export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }
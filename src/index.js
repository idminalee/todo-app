import { renderTodos } from './views'
import { setFilters } from './filters';
import { loadTodos, createTodo } from './todos';

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos();
})

// Set up form submission handler
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    const text = e.target.elements.newTodo.value.trim()
    e.preventDefault();
    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.newTodo.value = '';
    }
})

// Setup checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos();
})

// a watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})
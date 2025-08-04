export function getAllTodos() {
    const todos = [];
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        if(key.startsWith("todo_")) {
            const value = localStorage.getItem(key);
            if(value) {
                todos.push(value);
            }
        }
    }
    return todos;
}

export function removeTodo(key) {
    localStorage.removeItem(key);
}

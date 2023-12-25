/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = []
  }

  add(todo) {
    this.todos.push(todo)
  }

  remove(indexOfTodo) {
    if(indexOfTodo < this.todos.length) {
      this.todos = this.todos.filter((_, index) => index !== indexOfTodo);
    }
  }

  update(index, updatedTodo) {
    if(index < this.todos.length) this.todos[index] = updatedTodo 
  }

  getAll() {
    return this.todos
  }

  get(indexOfTodo) {
    if(indexOfTodo < this.todos.length) return this.todos[indexOfTodo];
    return null
  }

  clear() {
    this.todos = []
  }
}

module.exports = Todo;

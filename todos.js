// VERSION 1 & 2 COMPLETE

var todos = ['item 1', 'item 2', 'item 3'];

// It should have a function to display todos.
function displayTodos() {
    console.log('My todos:', todos)
}

// It should have a function to add todos.
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// It should have a function to change todos.
function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

// It should have a function to delete todos.
function deleteTodo(position) {
	todos.splice(position, 1)
	displayTodos();
}

// VERSION 3 COMPLETE

// It should store the todos array on an objects
var todoList = {
    
  todos: ['item 1', 'item 2', 'item 3'],
  
  // It should have a dispayTodos method
  displayTodos: function() {
    console.log('My Todos:', this.todos);
  },
  
  // It should have an addTodo method
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  
  // It should have a changeTodo method
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  
  // It should have a deleteTodo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

// VERSION 4

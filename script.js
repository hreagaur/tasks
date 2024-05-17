let todoItems = [];

const inputField = document.getElementById('todoInput');
const listContainer = document.getElementById('todoList');
const addButton = document.getElementById('addBtn');

addButton.addEventListener('click', addNewTodo);

function addNewTodo() {
  const userInput = inputField.value.trim();
  if (userInput !== '') {
    todoItems.push({ text: userInput, completed: false, sticky: false });
    updateTodoList();
    inputField.value = '';
  }
  else{
        alert("where is the task bro?!");
  }
}

function toggleCompletionStatus(index) {
  todoItems[index].completed = !todoItems[index].completed;
  updateTodoList();
}

function toggleStickyStatus(index) {
  todoItems[index].sticky = !todoItems[index].sticky;
  updateTodoList();
}

function removeTodoItem(index) {
  todoItems.splice(index, 1);
  updateTodoList();
}

function updateTodoList() {
  listContainer.innerHTML = '';
  todoItems.forEach((todo, index) => {
    const listItem = document.createElement('li');
    listItem.className = todo.completed ? 'todo completed' : 'todo';
    listItem.innerHTML = `
      <input type="radio" name="sticky" ${todo.sticky ? 'checked' : ''} onclick="toggleStickyStatus(${index})">
      <span>${todo.text}</span>
      <button class="delete" onclick="removeTodoItem(${index})">&#10006;</button>
    `;
    listItem.addEventListener('click', () => toggleCompletionStatus(index));
    listContainer.appendChild(listItem);
  });
}

updateTodoList();

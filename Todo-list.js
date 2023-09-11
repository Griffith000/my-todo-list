const todoList = JSON.parse(localStorage.getItem('todo')) || [
  {
  name: 'make dinner',
  dueDate: '2023-30-07'
},
{
  name: 'wash dishes',
  dueDate: '2023-29-07'
}];

//console.log(JSON.parse(localStorage.getItem('todo')));
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';


  todoList.forEach(function(todoObject,index) {
    const { name,dueDate } = todoObject;
    const html =`
      <div> ${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button js-delete-button">
        Delete
      </button>`;
    todoListHTML += html;   
  });
  /*for(let i=0 ; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name,dueDate } = todoObject;

    const html =`
      <div> ${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
        saveToLocalStorage();
      "class="delete-button">Delete</button>`;
    todoListHTML += html;   
  }*/

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

document.querySelector('.js-add-button').addEventListener('click' , () => {
  addTodo();
})
document.querySelectorAll('.js-delete-button')
  .forEach( (deleteButton , index) => {
    deleteButton.addEventListener('click' , () =>{
      todoList.splice(index,1);
      renderTodoList();
      saveToLocalStorage();
    });
  });

function addTodo (){
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-dueDate-input');
  const name = inputElement.value;
  const date = dateInputElement.value;

  todoList.push({
    //name: name
    name,
    dueDate : date
   });
 
  inputElement.value = '';
  renderTodoList();
  saveToLocalStorage();
}

function saveToLocalStorage(){
  localStorage.setItem('todo', JSON.stringify(todoList));
}


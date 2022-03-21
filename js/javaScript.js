let todoForm = document.querySelector(".todo-form form");
let todos;
showTodo()
todoForm.addEventListener("submit", addTodo);
//function to add todo
function addTodo(e) {
  e.preventDefault();
  let todoValue = document.querySelector(".todo-form form input");
  let todosItem=localStorage.getItem('todos')
  if(todosItem==null){
    todos=[]
  }
  else{
    todos=JSON.parse(todosItem)
  }
  todos.unshift(todoValue.value);
  localStorage.setItem('todos',JSON.stringify(todos))
  todoValue.value = "";
  showTodo();
}
//function to show todo
function showTodo() {
  let allTodos = document.querySelector(".all-todos");
  let todosData = "";
  let todoItems=localStorage.getItem('todos')
  if(todoItems==null){
    todos=[]
  }
  else{
    todos= JSON.parse(todoItems)
  }
  if(todos.length>0){
    todos.map(function (element, index) {
      todosData += `<div class="todo">
      <p>${element}</p>
      <i
        class="fa-solid fa-trash-can" onclick=deleteTodo(${index})
      ></i>
    </div>`;
    });
  }
  else{
    todosData+='<p class="text-center text-danger">nothing to show yet!</P>'
  }
  allTodos.innerHTML = todosData;
}
//create function to delete todo
function deleteTodo(id){
  let todoItems=localStorage.getItem('todos')
  if(todoItems==null){
    todos=[]
  }
  else{
    todos= JSON.parse(todoItems)
  }
  todos= todos.filter(function(element,index){
    return index!=id
  })
  localStorage.setItem('todos', JSON.stringify(todos))
  showTodo()
}

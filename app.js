// selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')




// Event listner 


todoButton.addEventListener('click' , addTodo)

todoList.addEventListener('click' , deletecheck)



//Functions 

function addTodo(event){
    event.preventDefault()


    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // create li

    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    // check mark button 

    const completeButton = document.createElement('button')
    completeButton.innerHTML ='<i class="fas fa-check"></i>'
    completeButton.classList.add("complete-btn")
    todoDiv.appendChild(completeButton)


     // check trash button 

     const trashButton = document.createElement('button')
     trashButton.innerHTML ='<i class="fas fa-trash"></i>'
     trashButton.classList.add("trash-btn")
     todoDiv.appendChild(trashButton)


    //  append to list 


    todoList.appendChild(todoDiv)

    // clear todo value 

    todoInput.value = ""

} 




function deletecheck (e){
    const item = e.target ;
    const todo = item.parentElement

    // delete to do 

    if (item.classList[0]==='trash-btn'){
        todo.remove()
    }
}
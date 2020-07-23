const myTodos = ['Exercise','Learn Javascript','Write articles']

console.log(myTodos.indexOf('Exercise'));

const newTodos = [{
    title: 'Buy Bread',
    isDone: false
},{ 
    title: 'Go to Gym',
    isDone: false
},{
    title: 'Record youtube videos',
    isDone: false
}]

//Method 1
/*
const findTodo = function (myTodos, title) {
    const index = myTodos.findIndex(function(todo,index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}

let printMe = findTodo(newTodos,'Go to Gym')
console.log(printMe);
*/

//Method 2
const findTodo = function(myTodos,title){
    const titleReturned = myTodos.find(function (todo,index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}
let printMe = findTodo(newTodos,'Go to Gym')
console.log(printMe);

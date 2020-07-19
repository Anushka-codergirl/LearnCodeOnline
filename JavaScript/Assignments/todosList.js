//using forloop
const myTodos = []
myTodos.unshift('Listen Music')
myTodos.unshift('Learn Javascript')
myTodos.unshift('Exercise')

for (let index = 0; index < myTodos.length; index++) {
    console.log(`My task no. ${index+1} is: ${myTodos[index]}`);
}

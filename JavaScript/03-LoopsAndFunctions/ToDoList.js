const myTodos = []
myTodos.push('Take Breakfast')
myTodos.push('Learn Javascript')
myTodos.push('Exercise')

myTodos.forEach(function(todo,index){
    console.log(`Your task no. ${index+1} is: ${todo}`);
})
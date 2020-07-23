const todos =[{
    title: 'Buy Bread',
    isDone: true
},{
    title: 'Exercise',
    isDone: true,
},{
    title: 'Learn JavaScript',
    isDone: true
},{
    title: 'Read Books',
    isDone: false
}]

const thingsDone = todos.filter((todo)=> todo.isDone === true
)

console.log(thingsDone);
//Print the title of things which are not done
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
    title: 'Take break',
    isDone: false
},{
    title: 'Learn Backend',
    isDone: false
},
{
    title: 'Read Books',
    isDone: false
}]

const thingsNotDone = todos.filter((todo)=> {
    return (todo.isDone === false)

})


thingsNotDone.forEach(elements=>console.log(elements.title))

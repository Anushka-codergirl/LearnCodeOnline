//Using foreachloop
const toDoList = ['Yoga','Practice JavaScript','Play some game']

toDoList.forEach(function(list,index){
    console.log(`${index+1}: I need to ${list}`);
})
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

//Using forEach loop
days.forEach(function(day,index){
    console.log(`Starts with ${index+1} -- ${day}`);
})

//Using for loop
for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
}


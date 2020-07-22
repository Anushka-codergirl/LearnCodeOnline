let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num) {
        this.meetings = this.meetings + num
    },

    meetDone: function(num){
        this.meetings = this.meetings - num
    },
    
    summary: function() {

        return `You have ${this.meetings} meeting today!`
    },
 
    resetDay: function(){
        this.meetings = 0;
        this.meetDone = 0;
        return `Resetting the day with meetings : ${this.meetings} and meetings done: ${this.meetDone}`
    }
}

myTodos.addMeeting(5);
myTodos.meetDone(2);
console.log(myTodos.summary());
console.log(myTodos.resetDay());
console.log(myTodos);

localStorage.setItem('hero','thor');
localStorage.setItem('todo','Learn JavaScript');
var myHero = localStorage.getItem('hero');
console.log(myHero);

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo','Listen Music');
console.log(localStorage.getItem('todo'));


//localStorage.removeItem('hero');
localStorage.clear();

myHero = localStorage.getItem('hero');
console.log(myHero);









const numbers = ['One','Two','Three','Four','Five','Six']

//Start
console.log(numbers.shift());
console.log(numbers);

numbers.unshift('SOMETHING')
console.log(numbers);

//Middle
numbers.splice(2,1,'ANYTHING')
console.log(numbers);

//End
console.log("The element to be deleted is: " + numbers.pop());
console.log(numbers);

numbers.push('Seven')
console.log(numbers);


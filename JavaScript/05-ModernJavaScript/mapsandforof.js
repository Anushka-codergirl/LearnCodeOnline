var anu = {
    name: 'I am Anu',
    age: 20,
    isActive: true
}

var marry = {
    name: 'I am Marry',
    age:21,
    isActive: true
}

var sam = {
    name: 'I am Sam',
    age:22,
    isActive: false
}

let users = new Map()

users.set('anu',anu)
users.set('marry',marry)
users.set('sam',sam)

//console.log(users.size);

//console.log(users.get('anu'));

//console.log(users.keys());

//console.log(users.values());

/*for(const value of users.values()){
    console.log(value.name);
}
*/

//using for of loop
for(const [key,value] of users.entries()){
    console.log(key + ' = ' + value.name);
}

//Using forEach loop
//users.forEach((value,key)=> console.log(key + ' = ' + value.name))

class User{
    constructor(firstname, lastname, credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }
    getFullName(){
        let fullname = `${this.firstname}  ${this.lastname} is my full name with ${this.credit} credits`;
        return fullname;
    }
    editName(newname){
        const myname = newname.split(' ');
        this.firstname = myname[0];
        this.lastname = myname[1];
    }

}


class Teacher extends User{
    constructor(firstname, lastname, credit,subject){
        super(firstname, lastname, credit);
        this.subject = subject;
    }
    getFullName(){
        let fullname = `${this.firstname}  ${this.lastname} is my full name with ${this.credit} credits and I teach ${this.subject}`;
        return fullname;
    }
    favDrink(name){
        console.log(`My favorite drink is ${name}`);
    }
}


const anu = new Teacher("Anushka", "Raj", 20, "JavaScript");
//console.log(anu);
console.log(anu.getFullName());
anu.editName('Richa Gupta');
console.log(anu.getFullName());
anu.favDrink('IceTea');

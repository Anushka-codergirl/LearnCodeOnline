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

const anu = new User("Anushka", "Raj", 20);
//console.log(anu);
console.log(anu.getFullName());
anu.editName('Anushka Gupta');
console.log(anu.getFullName());


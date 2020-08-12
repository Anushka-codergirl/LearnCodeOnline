class User{
    constructor(firstname, middlename, lastname, credit){
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.credit = credit;
    }
    getFullName(){
        return `${this.firstname} ${this.middlename} ${this.lastname} is my full name with ${this.credit} credit`;
    }
    editName(newname){
        const myname = newname.split(' ');
        this.firstname = myname[0];
        this.middlename = myname[1];
        this.lastname = myname[2];
    }

}

const anu = new User("Anushka", "Raj", "Sah" , 20);
//console.log(anu);
console.log(anu.getFullName());
anu.editName("Anushka Raj Gupta");
console.log(anu.getFullName());


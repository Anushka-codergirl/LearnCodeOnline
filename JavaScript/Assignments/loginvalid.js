//form validation
document.querySelector('.myform').addEventListener('submit',(event) =>{
    event.preventDefault();   

    event.target.username.value = '';
    event.target.email.value = '';
    event.target.pass1.value = '';
    event.target.pass2.value = '';
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
   
    if(pass1.length>=8 && pass1 === pass2){
        alert("You have successfully Signed Up!");
    } else{
        alert("Password not matched!");
    }
})

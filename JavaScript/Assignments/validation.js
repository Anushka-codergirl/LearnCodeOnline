function myValidation() {
    let myValue = document.getElementById('myform').value;


    if(isNaN(myValue) || myValue < 1 || myValue > 20){
        document.getElementById('idone').textContent = 'Not a valid input';
    } else{
        document.getElementById('idone').textContent = 'This input is ok';
    }

}

//alert('Hello There!')
//console.log(document);

document.title = 'Web Basics'

//const myElement = document.querySelectorAll('p')
//console.log(myElement);

//const myPElements = document.querySelector('p')
//myPElements.textContent = 'I am being changed using JS'

const myPElements = document.querySelectorAll('p')

myPElements.forEach(function (p) {
    p.textContent = 'I am changed using loop in js'
})


//myPElements.forEach((p)=>p.remove())

const myNewPara = document.createElement('p')
myNewPara.textContent = ' I was added via JS'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event) =>{
    event.target.textContent = 'I was clicked';
})

//track input form
document.querySelector('#myform').addEventListener('input',(event) =>{
    console.log(event.target.value);
})


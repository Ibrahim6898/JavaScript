//Select by ID
let a = document.getElementById('uniqueElement');
console.log(a);

//Select by class name
let b = document.getElementsByClassName('commonElement');
for (let i = 0; i < b.length; i++) {
    console.log(b[i].textContent);
}

//Select by tag name
let c = document.getElementsByTagName('p');
for (let i = 0; i < c.length; i++) {
    console.log(c[i].textContent);
}

//Select by querySelector
let d = document.querySelector('.commonElement');
console.log(d);

//Select by querySelectorAll
let e = document.querySelectorAll('.commonElement');
e.forEach(element=> {
    console.log(element.textContent);
});
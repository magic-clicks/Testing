// DOM navigation = the process of navigating 
// through the structing of an HTML document
// using JavaScript 

// .firstElementChild

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// can also use query selector all

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

// .lastElementChild - same using query selector all as above
const lastChild =  document.getElementById("fruits");
const last = element.lastElementChild;
last.style.backgroundColor = "green";


// .nextElementSibling



// .parentElement 



// .children


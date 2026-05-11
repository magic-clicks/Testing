// class list =  Element property in JavaScript used to interact 
// with an element list of classes (CSS classes)
// allows you to make reusable classes for many elements
// across your webpage

// add()
// remove()
// toggle (remove if present, add if not)
// replace (oldClass, newClass)
// contains ()

const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");

myButton.addEventListener("mouseover", function(){
    myButton.classList.add("hover");
})
myButton.addEventListener("mouseout", function(){
    myButton.classList.remove("hover");
})
// can also do .toggle for the add and remove 

myButton.classList.add("enabled");
myButton.addEventListener("click", function(){

    if(myButton.classList.contains("disabled")){
        myButton.textContent += "😀";
    }
    else{
            myButton.classList.replace("enabled", "disabled");
    }
    
})

const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");
myH1.addEventListener("click", function(){

    if(myH1.classList.contains("disabled")){
        myH1.textContent += "😀";
    }
    else{
            myH1.classList.replace("enabled", "disabled");
    }
    
})



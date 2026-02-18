// learning and applying local storage concepts

const label = document.getElementById("name-label");
const name = document.getElementById("name-field");
const nameSubmit = document.getElementById("name-submit");
const nameResult = document.getElementById("name-result");
const nameClear = document.getElementById("name-clear");


const savedName = localStorage.getItem("username");

if(savedName){
    nameResult.textContent = "Welcome back, " + savedName + "!";
    name.style.display = "none";
    nameSubmit.style.display = "none";
    label.style.display = "none";
    nameClear.classList.remove("hidden");
}

nameSubmit.addEventListener("click", function(){
    const userName = name.value;
    localStorage.setItem("username", name.value);
    location.reload();
});

nameClear.addEventListener("click", function(){
    localStorage.removeItem("username");
    location.reload();
});
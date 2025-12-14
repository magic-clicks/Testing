// more practice making a bit more complicated - creating a tip calculator 


const tip = document.getElementById("tip");
const tenPercent = document.getElementById("tenPercent");
const fifteenPercent = document.getElementById("fifteenPercent");
const twentyPercent = document.getElementById("twentyPercent");
const twentyFivePercent = document.getElementById("twentyFivePercent");
const percentResult = document.getElementById("percentResult");
let tipResult;
let tipOriginal;

function tipCalculator(){

    if(tenPercent.checked){
        tipResult = Number(tip.value);
        tipOriginal = Number(tip.value);
        tipResult = tipResult *.10 + tipOriginal;
        percentResult.textContent = "Total = $" + tipResult;
    }
    else if(fifteenPercent.checked){
        tipResult = Number(tip.value);
        tipOriginal = Number(tip.value);
        tipResult = tipResult *.15 + tipOriginal;
        percentResult.textContent = "Total = $" + tipResult;
    }
    else if(twentyPercent.checked){
        tipResult = Number(tip.value);
        tipOriginal = Number(tip.value);
        tipResult = tipResult *.20 + tipOriginal;
        percentResult.textContent = "Total = $" + tipResult;
    }
    else if(twentyFivePercent.checked){
        tipResult = Number(tip.value);
        tipOriginal = Number(tip.value);
        tipResult = tipResult *.25 + tipOriginal;
        percentResult.textContent = "Total = $" + tipResult;
    }
    else{
        percentResult.textContent = "Please select a percentage";
    }
}

// more practice this time doing sales tax calculator 
// making this one a seprate function no checked properties, and then making an onclick to call
// the function I created


const preTaxTotal = document.getElementById("preTaxTotal");
const taxResult = document.getElementById("taxResult");
const taxSubmit = document.getElementById("taxSubmit");
let salesTax;


function taxCalculator(){
    salesTax = Number(preTaxTotal.value);
    salesTax = salesTax * 0.0935 + salesTax;
    taxResult.textContent =  "$" + salesTax + " Dollars";
}

taxSubmit.onclick = taxCalculator;

// just testing something silly

rsn = "Magic Clicks";
console.log(`You are ${rsn}`);


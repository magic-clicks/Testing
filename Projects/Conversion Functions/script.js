//Temperature conversion program!

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const tempResult = document.getElementById("tempResult");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        tempResult.textContent = temp.toFixed(1) + "°F"; // the tofixed gives 1 decimal point
    }
    else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        tempResult.textContent = temp.toFixed(1) + "°C";
    }
    else{
        tempResult.textContent = "Select a unit";
    }
}

// practice doing a flour conversion for recipe website
// flour: 30 grams is equal to 1/4 cup 
// conversion here is grams to cups
// 1 cup all purpose flower is 120 grams

const flour = document.getElementById("flour");
const gramsToCups = document.getElementById("gramsToCups");
const cupsToGrams = document.getElementById("cupsToGrams");
const flowerResult = document.getElementById("flowerResult");
let flourConversion;

function flourConvert(){

    if(gramsToCups.checked){
        flourConversion = Number(flour.value);
        flourConversion = flourConversion / 120; 
        flowerResult.textContent = flourConversion + " Cups";
    }
    else if(cupsToGrams.checked){
        flourConversion = Number(flour.value);
        flourConversion = flourConversion * 120;
        flowerResult.textContent = flourConversion + " Grams";
    }
    else{
        flowerResult.textContent = "Please select a unit";
    }
}

// Another practice function doing sugar conversion calculator
// also doing grams to cup and then cups to grams

const sugar = document.getElementById("sugar");
const sugarCupsToGrams = document.getElementById("sugarCupsToGrams");
const sugarGramsToCups = document.getElementById("sugarGramsToCups");
const sugarResult = document.getElementById("sugarResult");
let sugarConvert;

function sugarConversion(){

    if(sugarGramsToCups.checked){
        sugarConvert = Number(sugar.value);
        sugarConvert = sugarConvert / 198;
        sugarResult.textContent = sugarConvert.toFixed(4) + " Cups";
    }
    else if(sugarCupsToGrams.checked){
        sugarConvert = Number(sugar.value);
        sugarConvert =  sugarConvert * 198;
        sugarResult.textContent = sugarConvert.toFixed(4) + " Grams";
    }
    else{
        sugarResult.textContent = "Please select a unit"
    }

}
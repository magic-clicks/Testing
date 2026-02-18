//BMI Calculator

//BMI = weight (pounds) / [height (in)]2 x 703

const height = document.getElementById("bmi-height");
const weight = document.getElementById("bmi-weight");
const result = document.getElementById("bmi-result");   



function calc(){
    let CalcHeight = Number(height.value);
    let CalcWeight = Number(weight.value);
    result.textContent =  (CalcWeight / (CalcHeight ** 2) * 703);
}
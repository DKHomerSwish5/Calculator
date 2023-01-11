let displayBottom = document.querySelector('.display2');
let displayTop = document.querySelector('.display1')
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let solve = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let operatorCheck;
let displayVal = '';
let val1;
let val2;
let operatorSign='';
number.forEach((num)=>{num.addEventListener('click',()=> displayBottom.textContent+=displayVal=num.textContent)});
operator.forEach((sign)=>{sign.addEventListener('click',()=>updateDisplay(val2=displayVal, operatorSign=sign.textContent))});
solve.addEventListener('click',()=>operate(operatorSign, val1, displayVal));
//clear.addEventListener('click',()=>)
function updateDisplay(value, operator){
    if(operatorCheck==true){
        operate(operator, val1, value);

    }
    else{
        val1= value;
        displayBottom.textContent = '';
        console.log(value+operator);
        displayTop.textContent = val1 + operator;
        operatorCheck = true;
    }

}
function clearInput(){

}
function add(x,y){
    displayTop.textContent = x+'+'+y
    return displayBottom.textContent = displayVal = Number(x)+Number(y)
}
function subtract(x,y){
    displayTop.textContent = x+'-'+y
    return displayBottom.textContent = displayVal = Number(x)-Number(y)
}
function multiply(x,y){
    displayTop.textContent = x+'x'+y
    return displayBottom.textContent = displayVal = Number(x)*Number(y)
}
function divide(x,y){
    displayTop.textContent = x+'/'+y
    return displayBottom.textContent = displayVal = Number(x)/Number(y)
}
function operate(operator, x, y){
    operator=='+'? add(x,y):
    operator=='-'? subtract(x,y):
    operator=='x'? multiply(x,y):
    operator=='/'? divide(x,y):
    ErrorEvent; 
    return
};

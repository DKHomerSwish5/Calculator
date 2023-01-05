let display = document.querySelector('.display');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let solve = document.querySelector('.equal');
let displayVal = '';
let val1;
let val2;
let operatorSign='';
number.forEach((num)=>{num.addEventListener('click',()=> display.textContent=displayVal+=num.textContent)});
operator.forEach((sign)=>{sign.addEventListener('click',()=>console.log(operator.textContent))});
solve.addEventListener('click',()=>operate(operatorSign, val1, displayVal));
function storeOperatorAndVal1(){
    operatorSign = operator.textContent;
    console.log(operatorSign);
    val1 = displayVal;
    displayVal = '';
}
function add(x,y){
    return result = x+y
}
function subtract(x,y){
    return result = x-y
}
function multiply(x,y){
    return result = x*y
}
function divide(x,y){
    return result = x/y
}
function operate(operator, x, y){
    operator=='+'? add(x,y):
    operator=='-'? subtract(x,y):
    operator=='x'? multiply(x,y):
    operator=='/'? divide(x,y):
    ErrorEvent; 
    return result
};

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
let val3;
let oldOper='';
let newOper='';
let operatorSign='';
number.forEach((num)=>{num.addEventListener('click',()=> displayBottom.textContent+=num.textContent)});
operator.forEach((sign)=>{sign.addEventListener('click',()=>updateDisplay(displayVal=displayBottom.textContent, operatorSign=sign.textContent))});
solve.addEventListener('click',()=>operate(operatorSign, val1, displayVal=displayBottom.textContent));

function updateDisplay(value, operator){
    if(oldOper==''){
        val1 = value;
        oldOper = operator;
        console.log(oldOper);
        displayTop.textContent = val1 + oldOper;
        displayBottom.textContent ='';
    }
    else{
        val2 = value;
        newOper = operator;
        operate(oldOper,val1, val2);
        console.log(val1);
        oldOper = newOper;
        newOper='';
    }
    return
}
function add(x,y){
    displayTop.textContent = val3 = Number(x)+Number(y);
    val1 = val3;
    displayBottom.textContent = '';
    return
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


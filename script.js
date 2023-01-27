let displayBottom = document.querySelector('.display2');
let displayTop = document.querySelector('.display1')
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let solve = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let sign = document.querySelector('.sign');
let backspace = document.querySelector('.backspace');
let operatorCheck;
let displayVal = '';
let val1;
let val2;
let val3;
let oldOper='';
let newOper='';
let operatorSign='';
let decimal = false;
let operSolveCheck = false;
let solved = false;
let zeroPress = false;
number.forEach((num)=>{num.addEventListener('click',()=>numberInput(num))});
operator.forEach((sign)=>{sign.addEventListener('click',()=>updateDisplay(displayVal=displayBottom.textContent, operatorSign=sign.textContent))});
solve.addEventListener('click',()=>operate(operatorSign, val1, displayVal=displayBottom.textContent));
clear.addEventListener('click',()=>clearDisplay());
sign.addEventListener('click',()=>signPosNeg(displayBottom.textContent));
backspace.addEventListener('click',()=>displayBottom.textContent=displayBottom.textContent.slice(0,-1));
function numberInput(num){
    if(num.textContent=='.'&& decimal==false){
        if(solved==true){
            displayBottom.textContent = '';
            solved = false;
        }
        decimal = true;
        displayBottom.textContent+=num.textContent;
        operSolveCheck = false;
        solved = false;
    }
    else if(num.textContent=='.' && decimal==true){
    }
    else{
        if(solved==true){
            displayBottom.textContent = '';
            solved = false;
        }
        if(zeroPress==true){
            return
        }
        if(displayBottom.textContent=='0'){
            zeroPress = true;
        }
        displayBottom.textContent+=num.textContent;
        operSolveCheck = false;
        solved = false;
    }
    return
}
function updateDisplay(value, operator){
    if(oldOper==''){
        val1 = value;
        oldOper = operator;
        console.log(oldOper);
        displayTop.textContent = val1 + oldOper;
        displayBottom.textContent ='';
        decimal = false;
        zeroPress = false;
    }
    else{
        val2 = value;
        newOper = operator;
        operate(oldOper,val1, val2);
        console.log(val1);
        oldOper = newOper;
        newOper='';
        val1 = val3;
        displayTop.textContent = val1 + oldOper;
        displayBottom.textContent ='';
        decimal = false;
        zeroPress = false;
    }
    return
}
function clearDisplay(){
    val1 = '';
    val2 = '';
    val3 = '';
    displayBottom.textContent = '';
    displayTop.textContent = '';
    oldOper = '';
    newOper = '';
    operatorSign = '';
    decimal = false;
    operSolveCheck = false;
    zeroPress = false;
    return
}
function signPosNeg(value){
    value*=-1;
    displayBottom.textContent = value;
    return
}
function add(x,y){
    if(operSolveCheck==false){
        operSolveCheck = true;
        solved = true;
        displayBottom.textContent = val3 = Math.round((Number(x)+Number(y))*100)/100;
        val1 = val3;
        displayTop.textContent = x +' + '+ y;
        oldOper = '';
        zeroPress = false;
    }
    else{
        return
    }
    return
}
function subtract(x,y){
    if(operSolveCheck==false){
        operSolveCheck = true;
        solved = true;
        displayBottom.textContent = val3 = Math.round((Number(x)-Number(y))*100)/100;
        val1 = val3;
        displayTop.textContent = x +' - '+ y;
        oldOper = '';
        zeroPress = false
    }
    else{
        return
    }
    return
}
function multiply(x,y){
    if(operSolveCheck==false){
        operSolveCheck = true;
        solved = true;
        displayBottom.textContent = val3 = Math.round((Number(x)*Number(y))*100)/100;
        val1 = val3;
        displayTop.textContent = x +' x '+ y;
        oldOper = '';
        zeroPress = false;
    }
    else{
        return
    }
    return
}
function divide(x,y){
    if(y==0){
        alert("YOU CAN'T DIVIDE BY ZERO, PLEASE ENTER A NON ZERO VALUE");
        displayBottom.textContent = '';
    }
    else{
        if(operSolveCheck==false){
            operSolveCheck = true;
            solved = true;
            displayBottom.textContent = val3 = Math.round((Number(x)/Number(y))*100)/100;
            val1 = val3;
            displayTop.textContent = x +' / '+ y;
            oldOper = '';
            zeroPress = false;
        }
        else{
            return
        }
    }
    return
}
function operate(operator, x, y){
    operator=='+'? add(x,y):
    operator=='-'? subtract(x,y):
    operator=='x'? multiply(x,y):
    operator=='/'? divide(x,y):
    ErrorEvent; 
    return
};


let button = document.getElementById('#button');
if(button){
    let display = document.querySelector('.display');
    let displayVal = button.addEventListener('click',()=>button.textContent);
    console.log(displayVal);
    display.textContent = displayVal;
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
    operator=='add'? add(x,y):
    operator=='subtract'? subtract(x,y):
    operator=='multiply'? multiply(x,y):
    operator=='divide'? divide(x,y):
    ErrorEvent; 
    return result
};

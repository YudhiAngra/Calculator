let display = document.getElementById('display')

function addsymbol(input){
    display.value = display.value + input;
}
function calculate(){
    let result = eval(display.value);
    display.value = result;
}
function cleardisplay(){
   display.value = "";
}
function clearcharacter(){
    display.value = display.value.slice(0, -1);
}
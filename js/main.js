const one = document.getElementById("One"); 
const two = document.getElementById("Two");
const three = document.getElementById("Three"); 
const four = document.getElementById("Four");
const five = document.getElementById("Five");
const six = document.getElementById("Six");
const seven = document.getElementById("Seven");
const eight = document.getElementById("Eight");
const nine = document.getElementById("Nine");
const zero = document.getElementById("Zero");
const dot = document.getElementById("Dot");
const add = document.getElementById("Plus");
const sub = document.getElementById("Minus");
const mul = document.getElementById("Multiply");
const div = document.getElementById("Divide");
const equals = document.getElementById("numberArea");
const equal = document.getElementById("Equals");
const clear = document.getElementById('clear');

clear.onclick = () => {
  equals.value = '';
}
one.onclick = function(){
    equals.value += 1;
}

two.onclick = function(){
    equals.value += 2;
}


three.onclick = function(){
    equals.value += 3;
}

four.onclick = function(){
    equals.value += 4;
}

five.onclick = function(){
    equals.value += 5;
}

six.onclick = function(){
    equals.value += 6;
}

seven.onclick = function(){
    equals.value += 7;
}


eight.onclick = function(){
    equals.value += 8;
}


nine.onclick = function(){
    equals.value += 9;
}


zero.onclick = function(){
    equals.value += 0;
}


add.onclick = function(){
    equals.value += "+";
}


sub.onclick = function(){
  equals.value = equals.value + '-'
    // equals.value += "-";
}


mul.onclick = function(){
    equals.value += "*";
}


div.onclick = function(){
    equals.value += "/";
}


dot.onclick = function(){
    equals.value += ".";
}

equal.onclick = function(){
    equals.value = eval(equals.value);
}
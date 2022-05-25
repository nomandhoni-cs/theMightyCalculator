/*
 * Title: Complete JavaScript of my Calculator Project
 * Description: In this file I wrote full Code
 * Author: Abdullah Al Noman
 * Date: 23/5/2022
 *
 */
//Assigning Variable and Selecting elements
let Clear = document.getElementById("Clear");
let bracketOne = document.getElementById("bracketOne");
let bracketTwo = document.getElementById("bracketTwo");
let backspace = document.getElementById("backspace");
let Seven = document.getElementById("Seven");
let Eight = document.getElementById("Eight");
let Nine = document.getElementById("Nine");
let Divide = document.getElementById("Divide");
let Four = document.getElementById("Four");
let Five = document.getElementById("Five");
let Six = document.getElementById("Six");
let Multiply = document.getElementById("Multiply");
let One = document.getElementById("One");
let Two = document.getElementById("Two");
let Three = document.getElementById("Three");
let Minus = document.getElementById("Minus");
let Zero = document.getElementById("Zero");
let Dot = document.getElementById("Dot");
let Plus = document.getElementById("Plus");
let Equals = document.getElementById("Equals");
let Display = document.getElementById("Display");

//Function Area
Clear.onclick = () => (Display.value = "");
bracketOne.onclick = () => (Display.value += "(");
bracketTwo.onclick = () => (Display.value += ")");
backspace.onclick = () => (Display.value = Display.value.slice(0, -1));
Seven.onclick = () => (Display.value += "7");
Eight.onclick = () => (Display.value += "8");
Nine.onclick = () => (Display.value += "9");
Divide.onclick = () => (Display.value += "/");
Four.onclick = () => (Display.value += "4");
Five.onclick = () => (Display.value += "5");
Six.onclick = () => (Display.value += "6");
Multiply.onclick = () => (Display.value += "*");
One.onclick = () => (Display.value += "1");
Two.onclick = () => (Display.value += "2");
Three.onclick = () => (Display.value += "3");
Minus.onclick = () => (Display.value += "-");
Zero.onclick = () => (Display.value += "0");
Dot.onclick = () => (Display.value += ".");
Plus.onclick = () => (Display.value += "+");
Equals.onclick = () => {
  let result = eval(Display.value);
  // check if the passed value is a number
  if (typeof result == "number" && !isNaN(result)) {
    // check if it is integer
    if (Number.isInteger(result)) {
      Display.value = result;
    } else {
      Display.value = result.toFixed(3);
    }
  } else {
    alert('Input Value to Calculate!')
  }
};

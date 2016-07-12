/******************************************************
*                JavaScript Functions                 *
* A JavaScript function is a block of code designed   *
* to perform a particular task.                       *
* A JavaScript function is executed when "something"  *
* invokes it (calls it).                              *
******************************************************/
function myFunction(a, b) {
  return a * b;
}
document.getElementById("demo").innerHTML =
myFunction(4, 3);

/******************************************************
*             JavaScript Function Syntax              *
  function name(parameter1, parameter2, parameter3) {
    code to be executed
  }
******************************************************/

/******************************************************
*                   Why Functions?                    *
******************************************************/
function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("fToC").innerHTML = toCelsius(77);

/******************************************************
*             Functions Used as Variables             *
******************************************************/
document.getElementById("used").innerHTML =
"The temperature is " + toCelsius(77) + " Celsius";

function toCelsus(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

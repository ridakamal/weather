
const calculator = () => {
var kelvin = parseFloat(document.querySelector("#text").value);
var celciusResult= kelvin - 273; 
//let Fahrenheit = Math.floor(Celcius*(9/5)+32);

document.querySelector("#-celcius").value = celciusResult;
}

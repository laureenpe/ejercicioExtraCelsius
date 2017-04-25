 function temperaturas(grados) {
     return (grados * 9 / 5) + 32; //formula para hallar grados fahrenheit
 }

 function convertirCelsius() {
     var celsius = document.getElementById("celsius");
     var fahrenheit = document.getElementById("farenheit");

     fahrenheit.value = temperaturas(celsius.value); //siempre se busca con value 
 }
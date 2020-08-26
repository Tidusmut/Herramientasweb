"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = 'Andres';
    var apellido = 'Ruiz';
    var edad = 2;
    // const salida = nombre + apellido + edad;
    //const salida = nombre + apellido + edad;
    //Andres Ruiz (Edad 27)
    var salida = "\n" + nombre + "\n " + apellido + " \n (" + getEdad() + ")";
    //Andres Ruiz ( Edad: 27 )
    console.log(salida);
})();

(function () {
    "use strict";
    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function () {

        //Datos usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //Campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdia = document.getElementById('pase_dosdia');
        var pase_completo = document.getElementById('pase_completo');

        //boton calcular
        var calcular = document.getElementById('calcular');
        var error = document.getElementById('error');
        var btnRegistro = document.getElementById('btnRegistro');
        var resultado = document.getElementById('lista-productos');
        //Calcular
        calcular.addEventListener('click', calcularMontos);

        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value == "") {
                alert("Debes elegir un regalo");
                regalo.focus();
            }
            else {
                console.log("hola");
            }
        }
    });
})();
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
        var lista_productos = document.getElementById('lista-productos');

        //Extras
        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa-evento');

        //totales
        var total_pagar = document.getElementById('suma-total');
        //Calcular
        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('blur', MosOcul);
        pase_dosdia.addEventListener('blur', MosOcul);
        pase_completo.addEventListener('blur', MosOcul);

        function calcularMontos(event) {
            //event.preventDefault();
            if (regalo.value == "") {
                alert("Debes elegir un regalo");
                regalo.focus();
            }
            else {

                var BoletoDia = parseInt(pase_dia.value, 10) || 0;
                var Boleto2Dias = parseInt(pase_dosdia.value, 10) || 0;
                var BoletoCompletos = parseInt(pase_completo.value, 10) || 0;
                var cant_camisa = parseInt(camisas.value, 10) || 0;
                var cant_eti = parseInt(etiquetas.value, 10) || 0;

                var total = (BoletoDia * 30) + (Boleto2Dias * 45) + (BoletoCompletos * 50) + ((cant_camisa * 10) - ((cant_camisa * 10) * 0.07)) + (cant_eti * 2);
                var listaProductos = [];
                if (BoletoDia >= 1) {
                    listaProductos.push(BoletoDia + ' Pases 1 dia');

                }
                if (Boleto2Dias >= 1) {
                    listaProductos.push(Boleto2Dias + ' Pases 2 dias');

                }
                if (BoletoCompletos >= 1) {
                    listaProductos.push(BoletoCompletos + ' Pases completos');
                }
                if (cant_camisa >= 1) {
                    listaProductos.push(cant_camisa + ' Camisas');

                }
                if (cant_eti >= 1) {
                    listaProductos.push(cant_eti + ' Etiquetas');

                }
                lista_productos.style.display = 'block';
                lista_productos.innerHTML = '';
                for (var i = 0; i < listaProductos.length; i++) {
                    lista_productos.innerHTML += listaProductos[i] + '<br/>';
                }
                total_pagar.innerHTML = '$ ' + total.toFixed(2);
                console.log(listaProductos);
            }
        }

        function MosOcul() {
            MostrarCursos();
            OcultarCursos();
        }
        function MostrarCursos() {

            var diasElegidos = [];
            var BoletoDia = parseInt(pase_dia.value, 10) || 0;
            var Boleto2Dias = parseInt(pase_dosdia.value, 10) || 0;
            var BoletoCompletos = parseInt(pase_completo.value, 10) || 0;
            if (BoletoDia > 0) {
                diasElegidos.push('viernes');
            }
            if (Boleto2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
            }
            if (BoletoCompletos > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }

            for (var i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }
        }
        function OcultarCursos() {

            var diasElegidos = [];
            var BoletoDia = parseInt(pase_dia.value, 10) || 0;
            var Boleto2Dias = parseInt(pase_dosdia.value, 10) || 0;
            var BoletoCompletos = parseInt(pase_completo.value, 10) || 0;
            if (BoletoDia == 0) {
                diasElegidos.push('viernes');
            }
            if (Boleto2Dias == 0) {
                diasElegidos.push('viernes', 'sabado');
            }
            if (BoletoCompletos == 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }

            for (var i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'none';
            }
        }
    });
})();
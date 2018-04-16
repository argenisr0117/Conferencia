//google map api//
var api = 'AIzaSyC7k_G8bGXOY-I7U76BK58MPMK_8gLhxX4';
function initMap() {
    latLng = {
        lat: 19.4579942,
        lng: -70.6839872
    };
    var contenido = '<h2>GDLCONFERENCIA</h2>' +
        '<p>De Viernes a Domingo</p>' +
        '<p>Visitanos!</p>';
    var informacion = new google.maps.InfoWindow({
        content: contenido
    });
    var map = new google.maps.Map(document.getElementById('mapa'), {
        center: latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'CONFERENCIA'
    });

    marker.addListener('click', function () {
        informacion.open(map, marker);
    });
}
//google map api//
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

        pase_dia.addEventListener('blur', MosOcul);
        pase_dosdia.addEventListener('blur', MosOcul);
        pase_completo.addEventListener('blur', MosOcul);
        function MosOcul() {
            OcultarCursos();
            MostrarCursos();
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


        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);


        function validarCampos() {
            if (this.value == '') {
                error.style.display = 'block';
                error.style.border = '1px solid red';
                error.innerHTML = 'Campo obligatorio';
                this.style.border = '1px solid red';
            }
            else {
                error.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }
        function validarMail() {
            if (this.value.indexOf("@") > -1) {
                console.log(this.value.indexOf("@"));
                error.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
            else {
                error.style.display = 'block';
                error.style.border = '1px solid red';
                error.innerHTML = 'Formato de correo incorrecto';
                this.style.border = '1px solid red';
            }
        }
    });
})();

$().ready(() => {
    'use stric'

    $('.nombre-sitio').lettering();
    $('.ocultar').hide();
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo')
    $('.menu-programa a').on('click', function() {
        $('.ocultar').hide();
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        console.log(enlace);
        return false;
    })

    //animaciones para numeros//
    $('.resumen-evento li:nth-child(1) p').animateNumber({number:6},1000);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number:15},1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number:3},1200);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number:9},1200);

    //Cuenta regresiva
    $('.cuenta-regresiva').countdown('2018/05/17 14:30:00',function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
});
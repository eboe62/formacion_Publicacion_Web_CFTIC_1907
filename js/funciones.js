// JavaScript Document

/*  --------------------------------------------------------- */
// Carousel W3School SlideShow
/*  --------------------------------------------------------- */

var myIndex = 0;
carousel(myIndex);

function plusSlides(n) {
    carousel(myIndex += n);
}
function currentSlide(n) {
    carousel(myIndex = n);
}

function carousel() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var slideslegend = document.getElementsByClassName("slidesLegend")

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > slides.length) {
        myIndex = 1
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < slideslegend.length; i++) {
        slideslegend[i].style.display = "none";  
    }
    slides[myIndex-1].style.display = "inline-block";  
    dots[myIndex-1].className += " active";
    slideslegend[myIndex-1].style.display = "inline";  
    setTimeout(carousel, 2000);    
}

/*  --------------------------------------------------------- */
// dropdown W3School
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
/*  --------------------------------------------------------- */

function myDropFunction() {
    document.getElementById("myDropdown").classList.toggle("dropdownshow");
}

window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("dropdownshow")) {
        openDropdown.classList.remove("dropdownshow");
      }
    }
  }
}

/*  --------------------------------------------------------- */
// sideNav W3School
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
/*  --------------------------------------------------------- */

function openNav() {
  document.getElementById("mySidenav").classList.toggle("sidenavshow");
/*  document.getElementById("mySidenav").style.width = "250px";*/
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*  --------------------------------------------------------- */
// Patrón para DNI
/*  --------------------------------------------------------- */

ValidateSpanishID = (function() {
    'use strict';
    
    var DNI_REGEX = /^(\d{8})([A-Z])$/;
    var CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    var NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;
  
    var ValidateSpanishID = function( str ) {
  
      // Ensure upcase and remove whitespace
      str = str.toUpperCase().replace(/\s/, '');
  
      var valid = false;
      var type = spainIdType( str );
  
      switch (type) {
        case 'dni':
          valid = validDNI( str );
          break;
        case 'nie':
          valid = validNIE( str );
          break;
        case 'cif':
          valid = validCIF( str );
          break;
      }
  
      return {
        type: type,
        valid: valid
      };
  
    };
  
    var spainIdType = function( str ) {
      if ( str.match( DNI_REGEX ) ) {
        return 'dni';
      }
      if ( str.match( CIF_REGEX ) ) {
        return 'cif';
      }
      if ( str.match( NIE_REGEX ) ) {
        return 'nie';
      }
    };
  
    var validDNI = function( dni ) {
      var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
      var letter = dni_letters.charAt( parseInt( dni, 10 ) % 23 );
      
      return letter == dni.charAt(8);
    };
  
    var validNIE = function( nie ) {
  
      // Change the initial letter for the corresponding number and validate as DNI
      var nie_prefix = nie.charAt( 0 );
  
      switch (nie_prefix) {
        case 'X': nie_prefix = 0; break;
        case 'Y': nie_prefix = 1; break;
        case 'Z': nie_prefix = 2; break;
      }
  
      return validDNI( nie_prefix + nie.substr(1) );
  
    };
  
    var validCIF = function( cif ) {
  
      var match = cif.match( CIF_REGEX );
      var letter  = match[1],
          number  = match[2],
          control = match[3];
  
      var even_sum = 0;
      var odd_sum = 0;
      var n;
  
      for ( var i = 0; i < number.length; i++) {
        n = parseInt( number[i], 10 );
  
        // Odd positions (Even index equals to odd position. i=0 equals first position)
        if ( i % 2 === 0 ) {
          // Odd positions are multiplied first.
          n *= 2;
  
          // If the multiplication is bigger than 10 we need to adjust
          odd_sum += n < 10 ? n : n - 9;
  
        // Even positions
        // Just sum them
        } else {
          even_sum += n;
        }
  
      }
  
      var control_digit = (10 - (even_sum + odd_sum).toString().substr(-1) );
      var control_letter = 'JABCDEFGHI'.substr( control_digit, 1 );
  
      // Control must be a digit
      if ( letter.match( /[ABEH]/ ) ) {
        return control == control_digit;
  
      // Control must be a letter
      } else if ( letter.match( /[KPQS]/ ) ) {
        return control == control_letter;
  
      // Can be either
      } else {
        return control == control_digit || control == control_letter;
      }
  
    };
  
    return ValidateSpanishID;
  })();

/*  --------------------------------------------------------- */
// Cálculo de Factorial
/*  --------------------------------------------------------- */

function obtenerfactorial() {
    var numero = parseInt(Number(document.getElementById("number11").value));

    var x = document.getElementById('etiqueta11');
    var resultado = 1;
    var i = numero;
    var texto = " El factorial del número "+ numero + " es ";

    if (numero <= 20 && numero > 0) {
        for (i; i > 0; i--){
            resultado = resultado * i;
            }
            x.innerHTML ="<p class='colorgrey' style='color:green'>" + texto + resultado + "</p>";
    } else {
    x.innerHTML ="<p class='colorgrey' style='color:red'>" + " El número debe ser mayor que 0 y menor que 20</p>";
    }
//alert('number1');
}

/*  --------------------------------------------------------- */
// Reloj Hora Actual
/*  --------------------------------------------------------- */

function reloj() {
  var fecha = new Date();
  ano = fecha.getFullYear();

  var mes = fecha.getMonth()+1;
  if (mes>12){mes = mes-12}
  if (mes<10){mes = "0" + mes;}

  var dia = fecha.getDate();
  if (dia<10){dia = "0" + dia;}

  var hora = fecha.getHours();
  if (hora<10){hora = "0" + hora;}

  var minutos = fecha.getMinutes();
  if (minutos<10){minutos = "0" + minutos;}

  var segundos = fecha.getSeconds();
  if (segundos<10){segundos = "0" + segundos;}

  var mes = fecha.getMonth()+1;
  if (mes>12){mes = mes-12}
  if (mes<10){mes = "0" + mes;}
  var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  
  var diasemana = fecha.getDay();
  if (diasemana == 0){diasemana = 7}
  var semana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
  
  document.getElementById("enlace1").innerHTML = "Año: " + ano;
  document.getElementById("enlace2").innerHTML = "Mes: " + mes;
  document.getElementById("enlace3").innerHTML = "Día: " + dia;
  document.getElementById("enlace4").innerHTML = "Hora: " + hora;
  document.getElementById("enlace5").innerHTML = "Minuto: " + minutos;
  document.getElementById("enlace6").innerHTML = "Segundo: " + segundos;
  document.getElementById("enlace7").innerHTML = "Mes: " + meses[mes-1];
  document.getElementById("enlace8").innerHTML = "Día semana: " + "0" + diasemana;
  
  document.getElementById("fechalarga").innerHTML = "Hoy es " + semana[diasemana-1] + " " + dia + " de " + meses[mes-1] + " de " + ano;
  
  var t = setTimeout(reloj, 1000);
  
}

/*  --------------------------------------------------------- */
// Geolocalizacion mapa
/*  --------------------------------------------------------- */

function getLocalizacion() {
	var x = document.getElementById("mapa");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition (muestraPosicion, muestraError);
	} else {
		x.innerHTML = "La geolocalización no es soportada por este navegador.";
	}
}

function muestraPosicion(position) {
	var ajusteCoordenadas = 0.0001 //Para corregir el desajuste de coordenadas
	var latitud = position.coords.latitude - ajusteCoordenadas;
	var longitud = position.coords.longitude - ajusteCoordenadas;
  var latlon = latitud + "," + longitud; //Coordenadas
  var zoom = "z=15"; //Zoom del mapa
  var tipoMapa = "t=m"; //Establece el tipo de mapa normal

/*
  Nota: El tipo de mapa se especifica usando los siguientes caracteres:
  m - Normal: muestra la vista del mapa de carreteras predeterminado.
  k - Vista aérea con imágenes satelitales de Google Earth.
  h - Hibrido: combinación de vistas normales y satelitales.
  p - Terrain: Mapa físico basado en información terrestre.

  información obtenida de la web:
  https://norfipc.com/mapas/como-insertar-mapa-google-pagina-iframe-codigos-trucos.php
*/  

var salida = "output=embed"; //Salida del mapa embebido

//Montamos la URL
var url = "http://maps.google.com/?ll=" + latlon + "&" + zoom + "&" + tipoMapa + "&" + salida;

//Creamos el iframe
document.getElementById("mapa").innerHTML = "<iframe src=" + url + " width='600' height='450' frameborder='0' style='border:0;' allowfullscreen></iframe>";
}

function getCoordenadas() {
  var x = document.getElementById("coordenadas");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition (showPosition);
  } else {
    x.innerHTML = "La geolocalización no es soportada por este navegador.";
  }
}

function showPosition(position) {
var x = document.getElementById("coordenadas");
  x.innerHTML = "<h5>" + "Geolocalización de tu navegador: " + "<br>" + "Latitud: " + position.coords.latitude + ", <br>" +
  "Longitud: " + position.coords.longitude + "</h5>";
}

function muestraError(error) {
  var x = document.getElementById("mapa");

  switch(error.code) {
  case error.PERMISSION_DENIED:
    x.innerHTML = "User denied the request for Geolocation."
    break;
  case error.POSITION_UNAVAILABLE:
    x.innerHTML = "Location information is unavailable."
    break;
  case error.TIMEOUT:
    x.innerHTML = "The request to get user location timed out."
    break;
  case error.UNKNOWN_ERROR:
    x.innerHTML = "An unknown error occurred."
    break;
  }
}

/*  --------------------------------------------------------- */
// FIN
/*  --------------------------------------------------------- */

// JavaScript Document
/*
var usuario1 = {user:"juan", password:"1234", pin: 147}; 
var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
var usuario3 = {user:"jose", password:"1324", pin: 369};
*/

var usuarioDB = ["juan", "pedro", "jose","juan"];
var contrasennaDB = ["1234ABCD", "4321ABCD", "1234ABCD", "1324ABCD"];
var numeroPuk1DB = ["1669", "6899", "6553", "6101"];
var numeroPuk2DB = ["6907", "4397", "9319", "6571"];
var hexaPukDB = ["AFE667", "1CEDFB7", "3A3D08F", "263B847"];
var digitoControlDB = ["4", "1", "9", "7"];

/*BORRAR
var usuarioPosiciones = new Array();
var contrasennaPosiciones = new Array();*/
var posicionUsuario = "";
var userConfirmado = "";
var passConfirmado = "";


/*  --------------------------------------------------------- */
// COMPROBAR USUARIO
/*  --------------------------------------------------------- */

function comprobarCampoUser(){
	var user = "";
 	user = document.getElementById("usuario").value; 
	var espacios = user.search(/\s/i);
	var caracteres = user.search(/[^A-Za-z0-9@.]/i);
	if (
		user === "" || 
		user === "null" || 
		user === " " || 
		espacios != -1 ||
		caracteres != -1
	) { // Comprobación de que los caracteres son correctos
		document.getElementById("mensajesUser").innerHTML = 
			"el usuario contiene caracteres no admitidos";
		document.getElementById('mensajesUser').style.color = "tomato";
	 	document.getElementById("usuario").focus();
	} else { // Comprobación de que el usuario existe
		document.getElementById("mensajesUser").innerHTML = "";
		posicionUsuario = usuarioDB.indexOf(user);
			if (posicionUsuario != -1) {
				document.getElementById("mensajesUser").innerHTML = 
				"usuario confirmado";
				document.getElementById('mensajesUser').style.color = "green";
			 	document.getElementById("contrasenna").focus();
				userConfirmado = user;
			 	user = ""; 
			 	return true;
			} else { // Si la contraseña no existe volvemos al campo Contrasenna
/*		alert("posicion usuario: " + posicionUsuario);*/
				document.getElementById("mensajesUser").innerHTML = 
				"usuario rechazado";
				document.getElementById('mensajesUser').style.color = "tomato";
				userConfirmado = "";
			 	document.getElementById("contrasenna").focus();
			 	return false;
			}
/*		alert("posicion usuario: " + posicionUsuario);*/
	}
}

/*  --------------------------------------------------------- */
// COMPROBAR CONTRASEÑA
/*  --------------------------------------------------------- */

function comprobarCampoPass(){
	var pass = "";
 	pass = document.getElementById("contrasenna").value; 
	var espacios = pass.search(/\s/i);
	var caracteres = pass.search(/[@.,;?*]/i);
	var longitud = pass.length;

	if (
		pass === "" || 
		pass === "null" || 
		pass === " " || 
		espacios != -1 ||
		caracteres != -1 ||
		longitud != 8
	) { // Comprobación de que los caracteres son correctos
		document.getElementById("mensajesPass").innerHTML = 
			"la contraseña contiene caracteres o dimensiones no admitidas";
		document.getElementById('mensajesPass').style.color = "tomato";
	} else { // Comprobación de que el usuario existe
		var contrasennaUsuario = contrasennaDB[posicionUsuario];
			if (pass == contrasennaUsuario) { // Si la contraseña existe la guardamos en passConfirmado
				document.getElementById("mensajesPass").innerHTML = 
				"contraseña confirmada";
				document.getElementById('mensajesPass').style.color = "green";
				passConfirmado = pass;
			 	pass = ""; 
			 	document.getElementById("enviar").focus();
			 	return true;
			} else { // Si la contraseña no existe volvemos al campo Contrasenna
/*		alert("Contraseña: " + contrasennaUsuario);*/
				document.getElementById("mensajesPass").innerHTML = 
				"contraseña rechazada";
				document.getElementById('mensajesPass').style.color = "tomato";
				passConfirmado = "";
			 	document.getElementById("etiquetaCheckboxPass").focus();
			 	return false;
			}
/*		alert("Posicion usuario: " + posicionUsuario + "\n" + "Contraseña: " + contrasennaUsuario);*/
	}
}

/*  --------------------------------------------------------- */
// MOSTRAR CONTRASEÑA
/*  --------------------------------------------------------- */

function mostrarPassword () {
  var campo = document.getElementById('contrasenna');
  if (campo.type === "password") {
    campo.type = "text";
  } else {
    campo.type = "password";
  }
}

/*  --------------------------------------------------------- */
// VALIDACION USUARIO Y CONTRASEÑA
/*  --------------------------------------------------------- */

function validacion() {
	var formulario = document.getElementById("form01");	
	var dato = formulario[0];

	if (comprobarCampoUser() == true || comprobarCampoPass() == true){
		alert("Usuario: " + userConfirmado + "\n" + "Contraseña: " + passConfirmado);
		formulario.submit();
		alert("Su solicitud se ha enviado con éxito. Gracias");
		document.getElementById("usuario").value = "";
		document.getElementById("contrasenna").value = "";
		var modal = document.getElementById("modalCuadro");
		modal.style.display = "block";
	} else {
		alert("Usuario: " + userConfirmado + "\n" + "Contraseña: " + passConfirmado);
		alert("Su solicitud no se ha procesado." + "\n" + "P.f. cargue de nuevo Usuario y Contraseña. Gracias");
	}
}

/*  --------------------------------------------------------- */
// GENERACION PUK DOBLE
/*  --------------------------------------------------------- */

var generadorPuk;
var numeroPuk1 = "";
var numeroPuk2 = "";
var numeroPukTotal = "";

function generacionPUKDoble() {
/*Creamos un primer número primo de cuatro dígitos*/
	calculoPUK();
	numeroPuk1 = generadorPuk; 
/*Lo concatenamos con un segundo número primo de cuatro dígitos*/
	calculoPUK();
	numeroPuk2 = generadorPuk; 
	numeroPukTotal = numeroPuk1 + numeroPuk2; 

	var arrayNumeroPuk = new Array();

/*Convertimos los dos números primos concatenados en un array para calcular el dígito de control*/
/*  numeroPukTotal = document.getElementById("recuperacionPuk").value;*/
	arrayNumeroPuk =  numeroPukTotal.split("").map(Number);

/*  --------------------------------------------------------- */
// CALCULO DEL DIGITO DE CONTROL
/*  --------------------------------------------------------- */

/*El dígito de control según Chronoexpress se calcula a partir de la suma de los números pares más los impares multiplicados por 3*/
	var sumatorioDC = 0;
	var digitoControl = 0;
	
/*	alert(arrayNumeroPuk);*/
		for (var i=0; i<numeroPukTotal.length; i++){
			if (i % 2 == 0) {
				sumatorioDC += arrayNumeroPuk[i]; 
			} else {
				sumatorioDC += arrayNumeroPuk[i]*3; 
			}
		}
	sumatorioDC = sumatorioDC.toString();
/*	alert(sumatorioDC + "\n" + typeof(sumatorioDC))*/

/*Del sumatorio de todos los números se extraen las únidades para calcular su diferencia con respecto a 10 y ese es el dígito de control que concatenaremos al final*/
	var sumatorioDCunidades = sumatorioDC.charAt(sumatorioDC.length-1);

	if (sumatorioDCunidades != 0) {digitoControl = 10 - (sumatorioDCunidades);}
/*  digitoControl = digitoControl.toString(); Es innecesario convertir el numero a String para concatenarlo con un string*/ 
/*	alert(digitoControl + "\n" + typeof(digitoControl));*/

/*Se concatenan los dos números primos de cuatro dígitos más el dígito de control por lo que el número final tiene 9 dígitos*/
	numeroPukTotal = numeroPukTotal + digitoControl;
/*	alert(numeroPukTotal + "\n" + typeof(numeroPukTotal))
	alert(numeroPukTotal.substring(0,4) + "\n" + numeroPukTotal.substring(4,8));*/
	
/*Se multiplican ambos números primos de cuatro dígitos*/
	var preHex = numeroPuk1 * numeroPuk2;
/*	alert(preHex + "\n" + typeof(preHex))*/

/*  --------------------------------------------------------- */
// CONVERSION A FORMATO HEXADECIMAL Y RETORNO AL DECIMAL
/*  --------------------------------------------------------- */

/*Se convierte el resultado de la multiplicación en formato hexadecimal*/
	var hexaPuk = preHex.toString(16).toUpperCase();
/*	alert(hexaPuk + "\n" + typeof(hexaPuk));*/
	
	numeroPukTotal = numeroPuk1 + hexaPuk.substring((hexaPuk.length-4),(hexaPuk.length)) + digitoControl;
/*	alert(numeroPukTotal + "\n" + typeof(numeroPukTotal));*/
	
	document.getElementById("recuperacionPuk").value = numeroPukTotal;

/*Se deja preparada la fórmula para recuperar el formato decimal desde el formato hexadecimal*/
	var postHex = "0x" + hexaPuk;
	postHex = parseInt(postHex.toString(10));
/*	alert(postHex + "\n" + typeof(postHex));*/

}

/*  --------------------------------------------------------- */
// GENERACION PUK SIMPLE
/*  --------------------------------------------------------- */

function calculoPUK() {
	generadorPuk = "";
	var i;
	var divisores = 0;

/* Buscamos el primer dígito de un puk de 4 dígitos */
	do {
		i = Math.floor(Math.random() * 10);
			if (i != 0) {generadorPuk += i;}
		i = 0;
	}
	while (generadorPuk.length < 1);

	parseInt(generadorPuk);
/*      alert (generadorPuk + " Al poner el primer dígito");*/

/* Buscamos los tres últimos dígitos de un puk de 4 dígitos */
	do {
		divisores = 0;
		generadorPuk = generadorPuk.charAt(0);
/*  alert (generadorPuk.charAt(0) + " " + typeof(generadorPuk) + " Antes de añadir los x999")*/
		i = Math.floor(Math.random() * 1000);
		if (i >= 100) {generadorPuk += i;}
		
	parseInt(generadorPuk);
/*  alert (generadorPuk + " " + typeof(generadorPuk) + " Despues de añadir los x999")*/
		i = 0;

/* Comprobamos si el puk es primo */
		for (var j = 1; j <= generadorPuk; j++) {
			if (generadorPuk % j == 0) {divisores ++;}
		}
/*  alert (generadorPuk + " " + typeof(generadorPuk) + "\n" +
           divisores + " " + typeof(divisores) + " Despues de comprobar si es primo");*/
      }
      while (generadorPuk < 1000 || divisores > 2);
	
/*	alert (generadorPuk + " " + typeof(generadorPuk));*/
}

/*  --------------------------------------------------------- */
// CANTIDAD DE NUMEROS PRIMOS COMPRENDIDOS ENTRE DOS NUMEROS
/*  --------------------------------------------------------- */

function numerosPrimos() {
	var divisores = 0;
	var contador = 0;
	var inicio = 1000;
	var fin = 10000;
	for (var i=inicio; i<fin; i++){
		for (var j = 1; j <= i; j++){
			if (i % j == 0) {
				divisores ++;
				}
			}
			if (divisores == 2) {
				contador ++;
		}
		divisores = 0;
	}
	alert(contador);
}

/*  --------------------------------------------------------- */
// SELECT SENCILLO
/*  --------------------------------------------------------- */

function seleccionSencilla() {
	var pos = document.getElementById("mascotaPregunta").selectedIndex;
	if (pos == -1) {
		alert ("Error: elija una opción de la lista");
	} else {
		alert ("Has elegido: " + document.getElementById("mascotaPregunta").value);
	}
}

/*  --------------------------------------------------------- */
// SELECT COMBINADO
/*  --------------------------------------------------------- */

var principalYSecundaria = {};
principalYSecundaria['VOLVO'] = ['V70', 'XC60', 'XC90'];
principalYSecundaria['VOLKSWAGEN'] = ['Golf', 'Polo', 'Scirocco', 'Touareg'];
principalYSecundaria['BMW'] = ['M6', 'X5', 'Z3'];

function ofreceLista() {
	var principalLista = document.getElementById("coche");
	var secundariaLista = document.getElementById("cocheModelo");
	var seleccionPrincipal = principalLista.options[principalLista.selectedIndex].value;
	while (secundariaLista.options.length) {
		secundariaLista.remove(0);
	}
	
	var coches = principalYSecundaria[seleccionPrincipal];
	if (coches) {
		var i;
		for (i = 0; i < coches.length; i++) {
		var coche = new Option(coches[i], i);
		secundariaLista.options.add(coche);
    }
  }
} 

/*  --------------------------------------------------------- */
// CHECKBOX MULTIPLE
/*  --------------------------------------------------------- */

function seleccionMultiple() {
	var alimentacion = document.forms[0];
	var txt = "";
	var i;
	for (i = 0; i < alimentacion.length; i++) {
		if (alimentacion[i].checked) {
			txt += alimentacion[i].value + " ";
    }
  }
  document.getElementById("resumenSeleccion").value = "Seleccionado: " + txt;
}

/*  --------------------------------------------------------- */
// RADIO EXCLUYENTE
/*  --------------------------------------------------------- */

function radioExcluyente() {
	var sexo = document.forms[0];
	var txt = "";
	var i;
	for (i = 0; i < sexo.length; i++) {
		if (sexo[i].checked) {
			txt += sexo[i].value + " ";
		}
	}
	document.getElementById("resumenRadio").value = "Sexo: " + txt;
}

/*  --------------------------------------------------------- */
// NOMBRE Y APELLIDOS COMPLETOS PARA DESGLOSARLOS EN SUBCADENAS
/*  --------------------------------------------------------- */

function subcadena(){
  var frase = prompt ("Introduce tu nombre y tus apellidos","   Francisco  de   Dios    de   la  Oropesiano  y   Carrizosa  ");
  var fraselimpia = frase.trim();
  var prefijos = ["de", "del", "la", "el", "de la", "de el", "un", "una", "uno", "en", "por", "von", "vom", "y", "i"];
  var i;
  var ubicacion = new Array();
  var recorte = new Array();
  var seleccion;
    ubicacion[0]=0;

/*Determina la ubicación de los espacios en un texto al que previamente se le han quitado los espacios sobrantes por delante y por detrás*/
  for (i = 0; i < fraselimpia.length; i++) {
    if (fraselimpia[i]==" ")
    ubicacion.push([i]);
  }
  ubicacion.push(fraselimpia.length);

/*Fragmenta el texto según la ubicación de los espacios*/
  for (i = 0; i <= ubicacion.length-2; i++){
  seleccion = fraselimpia.substring((ubicacion[i]),(ubicacion[i+1]));
  var seleccionlimpia = seleccion.trim();
  recorte.push(seleccionlimpia);
  }

/*  alert (recorte + "\n" + recorte.length + "\n" + ubicacion);*/

/*Elimina desde el final al principio del array (para no modificar el index mientras se ejecuta) todos los espacios en blanco detectados*/
  for (i = recorte.length; i >= 0; i--) {
    if (recorte[i]=="") {
      recorte.splice(i, 1);
    }
  }

/*  alert (recorte + "\n" + recorte.length + "\n" + ubicacion);*/

/*Agrupa los nombres con sus prefijos (artículos o preposiciones)*/
  do {
    for (i = 0; i <= recorte.length; i++) {
      if (prefijos.indexOf(recorte[i])>=0) {
        recorte.splice(i, 2, (recorte[i].concat(" " + recorte[i+1])));
      }
    }
  }
  while (recorte.length>4);

/*  alert (recorte + "\n" + recorte.length + "\n" + ubicacion);*/

	var recortetitulo = ["Nombre", "Apellido1", "Apellido2"];
	var recorteprovisional = new Array(recorte.length);
	var transferencia=0;
	for (i=0; i < recorte.length; i++) {
		for (i=0; i < recorteprovisional.length; i++) {
			transferencia=recorte[i];
			recorteprovisional[i]=transferencia;
	}
}
  
/*  --------------------------------------------------------- */
// Propuesta y aceptación de agrupamiento de Nombres y Apellidos
/*  --------------------------------------------------------- */

if (recorte.length>3) {
      recorteprovisional.splice(0, 2, (recorteprovisional[0].concat(" " + recorteprovisional[1])));
/*alert ("recorte " + recorte + "\n" + recorte.length + "\n" + ubicacion);
alert ("recorteprovisional " + recorteprovisional + "\n" + recorteprovisional.length + "\n" + ubicacion);*/
      var pulsarBoton = confirm("¿Es correcta la siguiente agrupación?: " + "\n" + 
                      recortetitulo[0] + ":   " + recorteprovisional[0] + "\n" +
                      recortetitulo[1] + ": " + recorteprovisional[1] + "\n" +
                      recortetitulo[2] + ": " + recorteprovisional[2] + "\n" +
                      recorteprovisional.length + "\n" + ubicacion);
      if (pulsarBoton == true) {
                      recorte[0] = recorteprovisional[0];
                      recorte[1] = recorteprovisional[1];
                      recorte[2] = recorteprovisional[2];
/*https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "\n";
}
alert (text);
*/
alert("Los datos se han guardado así: " + "\n" + 
                      recortetitulo[0] + ":   " + recorteprovisional[0] + "\n" +
                      recortetitulo[1] + ": " + recorteprovisional[1] + "\n" +
                      recortetitulo[2] + ": " + recorteprovisional[2]);
      } else { 
      recorteprovisional = recorte;  
/*  alert ("recorteprovisional rehecho " + recorte + "\n" + recorte.length + "\n" + ubicacion);*/
      recorteprovisional.splice(1, 2, (recorteprovisional[1].concat(" " + recorteprovisional[2])));
      pulsarBoton = confirm("¿Es correcta la siguiente agrupación?: " + "\n" + 
                      recortetitulo[0] + ":   " + recorteprovisional[0] + "\n" +
                      recortetitulo[1] + ": " + recorteprovisional[1] + "\n" +
                      recortetitulo[2] + ": " + recorteprovisional[2] + "\n" +
                      recorteprovisional.length + "\n" + ubicacion);
          if (pulsarBoton == true) {
/*    alert ("recorteprovisional rehecho " + recorte + "\n" + recorte.length + "\n" + ubicacion);*/
                          recorte[0] = recorteprovisional[0];
                          recorte[1] = recorteprovisional[1];
                          recorte[2] = recorteprovisional[2];
               alert("Los datos se han guardado así: " + "\n" + 
                        recortetitulo[0] + ":   " + recorteprovisional[0] + "\n" +
                        recortetitulo[1] + ": " + recorteprovisional[1] + "\n" +
                        recortetitulo[2] + ": " + recorteprovisional[2]);
          } else {
              alert("Por favor, rellenar campo a campo"); 
        }
    }
  }

  document.getElementById("nombreUsuario").value = recorte[0]; 
  document.getElementById("apellido1").value = recorte[1]; 
  document.getElementById("apellido2").value = recorte[2]; 

}

/*  --------------------------------------------------------- */
// FIN ----------- NOMBRE Y APELLIDOS COMPLETOS PARA DESGLOSARLOS EN SUBCADENAS
/*  --------------------------------------------------------- */

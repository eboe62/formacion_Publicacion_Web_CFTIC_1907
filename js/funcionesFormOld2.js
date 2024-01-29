// JavaScript Document
/*
var usuario1 = {user:"juan", password:"1234", pin: 147}; 
var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
var usuario3 = {user:"jose", password:"1324", pin: 369};
*/

var usuarioList = ["juan", "pedro", "jose","juan"];
var contrasennaList = ["1234ABCD", "4321ABCD", "1234ABCD", "1324ABCD"];
var pinList = ["147", "258", "369", "258"];
var usuarioPosiciones = new Array();
var contrasennaPosiciones = new Array();
var posicionUsuario = "";
var posicionContrasenna = "";

/*  --------------------------------------------------------- */
// COMPROBAR USUARIO
/*  --------------------------------------------------------- */

function comprobarCampoUser(){
	var user = "";
 	user = document.getElementById("usuario").value; 
	var espacios = user.search(/\s/i);
	var caracteres = user.search(/[^A-Za-z0-9@.]/i);
 	var encontrado = "";
	var userConfirmado = "";

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
		encontrado = usuarioList.indexOf(user);
			if (encontrado != -1) {
				usuarioPosiciones.splice(0, usuarioPosiciones.length);
				document.getElementById("mensajesUser").innerHTML = 
				"usuario confirmado";
				document.getElementById('mensajesUser').style.color = "green";
			 	document.getElementById("contrasenna").focus();
				userConfirmado = user;
			 	user = ""; 
			 	for (var i = 0; i < usuarioList.length; i++){
				    if (usuarioList[i] == userConfirmado) {
	    			usuarioPosiciones.push([i]);
				    }
			 	}
		 	} else { // Si la contraseña no existe volvemos al campo Contrasenna
		alert(encontrado);
				document.getElementById("mensajesUser").innerHTML = 
				"contraseña rechazada";
				document.getElementById('mensajesUser').style.color = "tomato";
				passConfirmado = "";
			 	document.getElementById("contrasenna").focus();
				usuarioPosiciones.splice(0, usuarioPosiciones.length);
			 }
		posicionUsuario = usuarioPosiciones[0];
		alert(usuarioPosiciones + "\n" + posicionUsuario);
	}
}

/*  --------------------------------------------------------- */
// COMPROBAR CONTRASEÑA
/*  --------------------------------------------------------- */

function comprobarCampoPass(){
	var pass = "";
 	pass = document.getElementById("contrasenna").value; 
	var espacios = pass.search(/\s/i);
	var caracteres = pass.search(/[^A-Za-z0-9@.]/i);
	var longitud = pass.length;
 	var encontrado = "";
 	var passConfirmado = "";

	if (
		pass === "" || 
		pass === "null" || 
		pass === " " || 
		espacios != -1 ||
		longitud != 8
	) { // Comprobación de que los caracteres son correctos
		document.getElementById("mensajesPass").innerHTML = 
			"la contraseña contiene caracteres o dimensiones no admitidas";
		document.getElementById('mensajesPass').style.color = "tomato";
	} else { // Comprobación de que el usuario existe
		document.getElementById("mensajesPass").innerHTML = "CARACTERES ADECUADOS";
		encontrado = contrasennaList.indexOf(pass);
			if (encontrado != -1) { // Si la contraseña existe la guardamos en passConfirmado
				contrasennaPosiciones.splice(0, contrasennaPosiciones.length);
				document.getElementById("mensajesPass").innerHTML = 
				"contraseña confirmada";
				document.getElementById('mensajesPass').style.color = "green";
				passConfirmado = pass;
			 	pass = ""; 
			 	document.getElementById("etiquetaCheckboxPass").focus();
			 	for (var i = 0; i < contrasennaList.length; i++){
				    if (contrasennaList[i] == passConfirmado) {
					contrasennaPosiciones.push([i]);
				    }
			 	}
		 	} else { // Si la contraseña no existe volvemos al campo Contrasenna
		alert(encontrado);
				document.getElementById("mensajesPass").innerHTML = 
				"contraseña rechazada";
				document.getElementById('mensajesPass').style.color = "tomato";
				passConfirmado = "";
			 	document.getElementById("etiquetaCheckboxPass").focus();
				contrasennaPosiciones.splice(0, contrasennaPosiciones.length);
			 }
		posicionContrasenna = contrasennaPosiciones[0];
		alert(contrasennaPosiciones + "\n" + posicionUsuario + "\n" + posicionContrasenna);
	}
}

/*  --------------------------------------------------------- */
// VALIDACION USUARIO Y CONTRASEÑA
/*  --------------------------------------------------------- */

function validacion() {
	if (posicionUsuario == posicionContrasenna){
		alert(posicionUsuario + "\n" + posicionContrasenna);
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


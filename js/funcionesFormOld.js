// JavaScript Document
/*
var usuario1 = {user:"juan", password:"1234", pin: 147}; 
var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
var usuario3 = {user:"jose", password:"1324", pin: 369};
*/

var usuarioList = ["juan", "pedro", "jose"];
var contrasennaList = ["1234", "4321", "1324"];
var pinList = ["147", "258", "369"];
var usuarioPosiciones = new Array();

/*  --------------------------------------------------------- */
// COMPROBAR USUARIO
/*  --------------------------------------------------------- */

function comprobarCampoUser(){
	var user = "";
 	user = document.getElementById("usuario").value; 
	var espacios = user.search(/\s/i);
	var caracteres = user.search(/[^A-Za-z0-9@.]/i);

	 	alert(usuarioList);
  		document.getElementById("form01").focus();

	if (
		user === "" || 
		user === "null" || 
		user === " " || 
		espacios != -1 ||
		caracteres != -1
	) {
		document.getElementById("mensajesUser").innerHTML = 
			"el usuario contiene caracterer no admitidos";
		document.getElementById('mensajesUser').style.color = "tomato";
	} else {
  		document.getElementById("contrasenna").disabled = false;
		document.getElementById("mensajesUser").innerHTML = "";
		for (var i = 0; i <= usuarioList.length; i++) {
		document.getElementById("mensajesUser").innerHTML = "";
		    if (usuarioList[i] == user) {usuarioPosiciones.push([i]);};
		  }
	 	document.getElementById("usuario").value = user; 
	 	alert(user);
	}
 	user = ""; 
  	document.getElementById("usuario").focus();
}

/*  --------------------------------------------------------- */
// COMPROBAR CONTRASEÑA
/*  --------------------------------------------------------- */

function comprobarCampoPass(){
	var user = "";
 	pass = document.getElementById("contrasenna").value; 
	var mayusculas = pass.search(/[A-Z]/g);
	var numeros = pass.search(/[^0-9]/i)
	var longitud = pass.length;

	if (
		pass === "" || 
		pass === "null" || 
		pass === " " || 
		espacios != -1 ||
		mayusculas == -1 ||
		numeros == -1 ||
		longitud != 8
	) {
		document.getElementById("mensajesPass").innerHTML = 
			"la contraseña debe contener números y mayúsculas";
		document.getElementById("mensajesUser").style.color = "tomato";
  		document.getElementById("contrasenna").focus();
	} else {
		document.getElementById("mensajesPass").innerHTML = 
		"";
		cadena += pass + ",";
		alert(cadena);
	}
}

	// SI EL CAMPO ESTÁ RELLENO CON UN ESPACIO (required)
	} else if (user === " ") {
		//alert ("el campo no puede tener un espacio en blanco");
		document.getElementById('mensajesUser').innerHTML = 
			"el campo no puede tener un espacio en blanco";
		document.getElementById('mensajesUser').style.color = "tomato";
		//SI EL CAMPO ESTÁ RELLENO LLAMA A LA FUNCIÓN COMPROBAR USUARIO
	} else {
//		alert ("el campo está relleno");
		limpiarUser();
	}
}

function limpiarUser() {	
	user = document.getElementById('usuario').value;
	
	var espacios = user.search(/\s/i);
//	alert (espacios);
	var caracteres = user.search(/[^A-Za-z0-9]/i);
//	alert (caracteres);
	
	if (espacios != -1) {
document.getElementById('mensajesUser').innerHTML = 
	"el usuario contiene espacios en blanco";
document.getElementById('mensajesUser').style.color = "tomato";
	} else if (caracteres != -1) {
document.getElementById('mensajesUser').innerHTML = 
	"el usuario contiene caracteres especiales";
document.getElementById('mensajesUser').style.color = "tomato";
	} else {
//        alert ("usuario limpio");
		comprobarUser();
	}
}

function comprobarUser() {
	user = document.getElementById('usuario').value;
	// Quitar espacios en blanco por delante y por detrás
	var quitarEspacios = user.trim();
 	user = quitarEspacios;
	//alert (user);
	// SI EL USUARIO EXISTE O NO
/*if ((user === usuario1.user) || (user === usuario2.user) || (user === usuario3.user)) {}*/
	if (user === usuario1.user) {
		//alert ("usuario encontrado en usuario1");
		document.getElementById('mensajesUser').innerHTML = 
			"usuario encontrado en usuario1";
		document.getElementById('mensajesUser').style.color = "green";
	} else if (user === usuario2.user){
		//alert ("usuario encontrado en usuario2");
		document.getElementById('mensajesUser').innerHTML = 
			"usuario encontrado en usuario2";
		document.getElementById('mensajesUser').style.color = "green";
	} else if (user === usuario3.user){
		//alert ("usuario encontrado en usuario3");
		document.getElementById('mensajesUser').innerHTML = 
			"usuario encontrado en usuario3";
		document.getElementById('mensajesUser').style.color = "green";
	} else  {
		//alert ("usuario no encontrado");
		document.getElementById('mensajesUser').innerHTML = "Usuario no encontrado";
		document.getElementById('mensajesUser').style.color = "tomato";
		user = "dd";
		alert(user);
	}
}

/*  --------------------------------------------------------- */
// COMPROBAR CONTRASEÑA
/*  --------------------------------------------------------- */

function comprobarCampoPass(){
 var pass = document.getElementById('password').value; 
//	alert(pass);
	
	// SI EL CAMPO ES VACIO O NULO (required)
	if (pass === "" || pass === "null") {
		alert ("el campo no puede ser nulo");
		document.getElementById('mensajesPass').innerHTML = 
			"el campo no puede ser nulo";
		document.getElementById('mensajesPass').style.color = "tomato";
	// SI EL CAMPO ESTÁ RELLENO CON UN ESPACIO (required)
	} else if (pass === " ") {
//		alert ("el campo no puede tener un espacio en blanco");
		document.getElementById('mensajesPass').innerHTML = 
			"el campo no puede tener espacios en blanco";
		document.getElementById('mensajesPass').style.color = "tomato";
		//SI EL CAMPO ESTÁ RELLENO LLAMA A LA FUNCIÓN COMPROBAR USUARIO
	} else {
//		alert ("el campo está relleno");
		limpiarPass();
	}
}

function limpiarPass() {	
	var pass = document.getElementById('password').value;
	
	var espacios = pass.search(/\s/i);
//	alert (espacios);
	var letras = pass.search(/[A-Za-z]/g);
//	alert (letras);
	var caracteres = pass.search(/[^A-Za-z0-9]/i);
//	alert (caracteres);
	var longitud = pass.length;
//	alert (longitud);
	
	if (espacios != -1) {
document.getElementById('mensajesPass').innerHTML = 
	"el password contiene espacios en blanco";
document.getElementById('mensajesPass').style.color = "tomato";
	} else if (letras != -1) {
document.getElementById('mensajesPass').innerHTML = 
	"el password contiene letras";
document.getElementById('mensajesPass').style.color = "tomato";
	} else if (caracteres != -1) {
document.getElementById('mensajesPass').innerHTML = 
	"el password contiene caracteres especiales";
document.getElementById('mensajesPass').style.color = "tomato";
	} else if ((longitud <= 3) || (longitud >= 5)) {
document.getElementById('mensajesPass').innerHTML = 
	"el password contiene caracteres especiales";
document.getElementById('mensajesPass').style.color = "tomato";
	} else {
//        alert ("usuario limpio");
		comprobarPass();
	}
}

function comprobarPass() {
	var pass = document.getElementById('password').value;
	// Quitar espacios en blanco por delante y por detrás
	//alert (password);
	// SI LA CONTRASEÑA EXISTE O NO
/*if ((pass === usuario1.password) || (pass === usuario2.password) || (pass === usuario3.password)) {}*/
	if (pass === usuario1.password) {
		//alert ("contraseña encontrada en usuario1");
		document.getElementById('mensajesPass').innerHTML = 
			"contraseña encontrada en usuario1";
		document.getElementById('mensajesPass').style.color = "green";
	} else if (pass === usuario2.password){
		//alert ("contraseña encontrada en usuario2");
		document.getElementById('mensajesPass').innerHTML = 
			"contraseña encontrada en usuario2";
		document.getElementById('mensajesPass').style.color = "green";
	} else if (pass === usuario3.password){
		//alert ("contraseña encontrada en usuario3");
		document.getElementById('mensajesPass').innerHTML = 
			"contraseña encontrada en usuario3";
		document.getElementById('mensajesPass').style.color = "green";
	} else  {
		//alert ("usuario no encontrado");
		document.getElementById('mensajesPass').innerHTML = "Contraseña no encontrada";
		document.getElementById('mensajesPass').style.color = "tomato";
		pass = "";
	}
}

/*  --------------------------------------------------------- */
// COMPROBAR PIN
/*  --------------------------------------------------------- */

function comprobarCampoPin(){
 var pin = document.getElementById('pin').value; 
//	alert(pin);
	
	// SI EL CAMPO ES VACIO O NULO (required)
	if (pin === "" || pin === "null") {
	// alert ("el campo no puede ser nulo");
		document.getElementById('mensajesPin').innerHTML = 
			"el campo no puede ser nulo";
		document.getElementById('mensajesPin').style.color = "tomato";
	// SI EL CAMPO ESTÁ RELLENO CON UN ESPACIO (required)
	} else if (pin === " ") {
//		alert ("el campo no puede tener un espacio en blanco");
		document.getElementById('mensajesPin').innerHTML = 
			"el campo no puede tener espacios en blanco";
		document.getElementById('mensajesPin').style.color = "tomato";
		//SI EL CAMPO ESTÁ RELLENO LLAMA A LA FUNCIÓN COMPROBAR USUARIO
	} else {
//		alert ("el campo está relleno");
		limpiarPin();
	}
}

function limpiarPin() {	
	var pin = document.getElementById('pin').value;
	
	var espacios = pin.search(/\s/i);
//	alert (espacios);
	var letras = pin.search(/[A-Za-z]/g);
//	alert (letras);
	var caracteres = pin.search(/[^A-Za-z0-9]/i);
//	alert (caracteres);
	var longitud = pin.length;
//	alert (longitud);
	
	if (espacios != -1) {
document.getElementById('mensajesPin').innerHTML = 
	"el pin contiene espacios en blanco";
document.getElementById('mensajesPin').style.color = "tomato";
	} else if (letras != -1) {
document.getElementById('mensajesPin').innerHTML = 
	"el pin contiene letras";
document.getElementById('mensajesPin').style.color = "tomato";
	} else if (caracteres != -1) {
document.getElementById('mensajesPin').innerHTML = 
	"el pin contiene caracteres especiales";
document.getElementById('mensajesPin').style.color = "tomato";
	} else if ((longitud <= 2) || (longitud >= 4)) {
document.getElementById('mensajesPin').innerHTML = 
	"el pin debe tener más o menos caracteres";
document.getElementById('mensajesPin').style.color = "tomato";
	} else {
//        alert ("usuario limpio");
		comprobarPin();
	}
}

function comprobarPin() {
	var pin = document.getElementById('pin').value;
	// Quitar espacios en blanco por delante y por detrás
	//alert (pin);
	// SI LA CONTRASEÑA EXISTE O NO
/*if ((pin === usuario1.pin) || (pin === usuario2.pin) || (pin === usuario3.pin)) {}*/
	if (pin === usuario1.pin) {
		//alert ("pin encontrado en usuario1");
		document.getElementById('mensajesPin').innerHTML = 
			"pin encontrado en usuario1";
		document.getElementById('mensajesPin').style.color = "green";
	} else if (pin === usuario2.pin){
		//alert ("pin encontrado en usuario2");
		document.getElementById('mensajesPin').innerHTML = 
			"pin encontrado en usuario2";
		document.getElementById('mensajesPin').style.color = "green";
	} else if (pin === usuario3.pin){
		//alert ("pin encontrado en usuario3");
		document.getElementById('mensajesPin').innerHTML = 
			"pin encontrado en usuario3";
		document.getElementById('mensajesPin').style.color = "green";
	} else  {
		//alert ("usuario no encontrado");
		document.getElementById('mensajesPin').innerHTML = "pin no encontrado";
		document.getElementById('mensajesPin').style.color = "tomato";
		pin = "";
	}
}

/*  --------------------------------------------------------- */
// CONTROL FORMULARIO
/*  --------------------------------------------------------- */

function login() {
	
	user = document.getElementById('usuario').value;
	alert(user); 
	var pass = document.getElementById('password').value; 
	var pin = document.getElementById('pin').value;

	document.getElementById('login').innerHTML = "bienvenido " + user;

	
	if ((user != "") && (pass != "")) {
	alert(user);
	document.getElementById('login').innerHTML = "usuario y contraseña correcta";
	document.getElementById('login').style.color = "green";
	} else if ((user === true) && (pin === true)) {
	document.getElementById('login').innerHTML = "usuario y pin correcto";
	document.getElementById('login').style.color = "tomato";
	}
	//document.getElementById('form01').action = "/action_page.php";
	document.getElementById('form01').action = "../html/confirmacion.html";

	return true;
}

/*  --------------------------------------------------------- */
// ENVIAR FORMULARIO
/*  --------------------------------------------------------- */

function enviar(){
	var formulario = document.getElementById("form01");	
	var dato = formulario[0];
 
	if (dato.value=="Enviar"){
		alert("Enviando el formulario");
		formulario.submit();
		return true;
	} else {
		alert("No se envía el formulario");
		return false;
	}
}


/*  --------------------------------------------------------- */
// MOSTRA CONTRASEÑA
/*  --------------------------------------------------------- */

function mostrarPassword () {
  var campo = document.getElementById('contrasenna');
  if (campo.type === "password") {
    campo.type = "text";
  } else {
    campo.type = "password";
  }
}


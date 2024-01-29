
// JavaScript Document
function tamanoVentana() {
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	var x = document.getElementById("infoVentana");
	x.innerHTML = "La ventana del navegador es: " + w + "px, y de alto: " + h + ".";
}

function crearImagen() {
	//SELECCIONAR ELEMENTO DIV IMAGEN
	var elementoDivImagen = document.getElementById("imagen");

	//CREAR ELEMENTO IMG DENTRO DE DIV IMAGEN
	var crearElementoImg = document.createElement("img");
	crearElementoImg.value = "";
	elementoDivImagen.appendChild(crearElementoImg);
	elementoDivImagen.appendChild(crearElementoImg);

	//CREAR ATRIBUTO SRC EN ELEMENTO IMG
	var crearAtributoImgSrc = document.createAttribute("src");
	crearAtributoImgSrc.value = "img/document-window-navigator.png";
	crearElementoImg.setAttributeNode(crearAtributoImgSrc);

	//CREAR ATRIBUTO ALT EN ELEMENTO IMG
	var crearAtributoImgAlt = document.createAttribute("alt");
	crearAtributoImgAlt.value = "Imagen DOM";
	crearElementoImg.setAttributeNode(crearAtributoImgAlt);

	//CREAR ATRIBUTO STYLE EN ELEMENTO IMG
	var crearAtributoImgStyle = document.createAttribute("style");
	crearAtributoImgStyle.value = "width:100%;height:auto";
	crearElementoImg.setAttributeNode(crearAtributoImgStyle);
	}


//INFORMACIÓN NAVEGADOR
function infoNavegador() {
	
// MOTOR NAVEGADOR
var motorNombre = navigator.appName;
if (motorNombre === "Netscape") {
	motorNombre = "Javascript";
	}
// NOMBRE NAVEGADOR
var navegador = window.navigator.appCodeName;	
// VERSION NAVEGADOR
var versionNav = window.navigator.appVersion;		
// PROPIETARIO NAVEGADOR
var propietario = propietarioNav;	
//LENGUIAJE
var lenguaje = window.navigator.language;
	
// NOMBRE NAVEGADOR
var navegador, agenteUsuario = navigator.userAgent;

if (agenteUsuario.indexOf("Firefox") > -1) 
{navegador = "Firefox";} 
else if ((agenteUsuario.indexOf("Opera") > -1) || (agenteUsuario.indexOf("OPR") > -1)) 
{navegador = "Opera";}
else if ((agenteUsuario.indexOf("Trident") > -1) ||(agenteUsuario.indexOf("MSIE") > -1)) 
{navegador = "I.Explorer";}
else if (agenteUsuario.indexOf("Edge") > -1) 
{navegador = "Edge";}
else if ((agenteUsuario.indexOf("Chrome") > -1) &&(agenteUsuario.indexOf("Safari") > -1)) 
{navegador = "Chrome";}
else if (agenteUsuario.indexOf("Safari") > -1) 
{navegador = "Safari";}
else {navegador = "Desconocido";}

	// alert("Estás usando: " + navegador);

// VERSIÓN NAVEGADOR
var version, agenteUsuario = navigator.userAgent;

if (agenteUsuario.indexOf("Firefox") > -1) {
	var indice1 = agenteUsuario.lastIndexOf("Firefox/");
	var version = agenteUsuario.substr(indice1,12);
	var localizar = version.search("/"); 
	var versionNav = version.slice(localizar+1,12);
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0
else if (agenteUsuario.indexOf("OPR") > -1) {
	var indice2 = agenteUsuario.lastIndexOf("OPR/");
	var version = agenteUsuario.substr(indice2,15);
	var localizar = version.search("/");  //3
	var versionNav = version.slice(localizar+1,8);	
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36 OPR/56.0.3051.99

	else if (agenteUsuario.indexOf("Edge") > -1) {
	var indice3 = agenteUsuario.lastIndexOf("Edge/");
	var version = agenteUsuario.substr(indice3,13);
	var localizar = version.search("/");  //4
	var versionNav = version.slice(localizar+1,9);
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134

else if (agenteUsuario.indexOf("Chrome") > -1) {
	var indice4 = agenteUsuario.lastIndexOf("Chrome/");
	var version = agenteUsuario.substr(indice4,20);
	var localizar = version.search("/");  //7
	var versionNav = version.slice(localizar+1,11);
	}
 // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36

else if (agenteUsuario.indexOf("Safari") > -1) {
	var indice5 = agenteUsuario.lastIndexOf("Version/");
	var version = agenteUsuario.substr(indice5,13);
	var localizar = version.search("/");  //7
	var versionNav = version.slice(localizar+1,5);
	}
// Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
	
else if ((agenteUsuario.indexOf("Trident") > -1) ||(agenteUsuario.indexOf("MSIE") > -1)) {
	var indice6 = agenteUsuario.lastIndexOf("rv:");
	var version = agenteUsuario.substr(indice6,7);
	var localizar = version.search(":");  //2
	var versionNav = version.slice(localizar+1,13);
}
	//Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; InfoPath.3; rv:11.0) like Gecko

	
	// alert("Versión: " + versionNav);


//PROPIETARIO NAVEGADOR
var propietarioNav, propietario = navigator.userAgent;
	
if (propietario.indexOf("Firefox") > -1) {
	propietarioNav = "Fundación Mozilla";
} else if ((propietario.indexOf("Opera") > -1) || (propietario.indexOf("OPR") > -1)) {	    
	propietarioNav = "Opera Software";
} else if ((propietario.indexOf("Trident") > -1) ||(propietario.indexOf("MSIE") > -1)) {    
	propietarioNav = "Microsoft Corporation";
} else if (propietario.indexOf("Edge") > -1) {
    propietarioNav = "Microsoft Corporation";
} else if (propietario.indexOf("Chrome") > -1) {
	propietarioNav = "Google, Inc.";
} else if (propietario.indexOf("Safari") > -1) {
	propietarioNav = "Apple Computer, Inc.";
} else {
	propietarioNav = "Desconocido";
	}
	// alert("Propietario: " + propietarioNav);
	
//SISTEMA OPERATIVO
var sistemaOS = "";
var agentUser = window.navigator.userAgent;

if (agentUser.indexOf("(Windows")) {
	var sistemaOS = "Windows";
} else if (agentUser.indexOf("(Apple")){
	var sistemaOS = "Apple";
} else if (agentUser.indexOf("(Linux")){
	var sistemaOS = "Linux";
} else if (agentUser.indexOf("iPhone")){
	var sistemaOS = "iPhone";
} else if (agentUser.indexOf("iPod")){
	var sistemaOS = "iPod";
} else if (agentUser.indexOf("iPad")){
	var sistemaOS = "iPad";
} else if (agentUser.indexOf("Android")){
	var sistemaOS = "Android";
} else {
	var sistemaOS = "Desconocido";
	}

//PLATAFORMA
var plataforma = window.navigator.platform;
var agentUser = window.navigator.userAgent;
	
if ((agentUser.indexOf("Chrome") > -1) ||
	(agentUser.indexOf("Edge") > -1) ||
    (agentUser.indexOf("OPR") > -1) || 
	(agentUser.indexOf("Firefox") > -1)) {
	var indice7 = agentUser.lastIndexOf("Win64");
	var plataforma = agentUser.substr(indice7,5); 
	}
//	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36
	
else if ((agentUser.indexOf("Safari") > -1) || 
         (agentUser.indexOf("Trident") > -1)|| 
		 (agentUser.indexOf("MSIE") > -1)) {
	var indice8 = agentUser.lastIndexOf("WOW64");
	var plataforma = "Win64"; 
	}
//Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2

	//NAVEGADOR ONLINE
var navegadorOnline = window.navigator.onLine; // true , false, undefined
if (navegadorOnline === true) {
	var navegadorOnline = "Si";
} else if (navegadorOnline === false) {
	var navegadorOnline = "No";
} else if (navegadorOnline === undefined) {
	var navegadorOnline = "Indefinido";
} else if (navegadorOnline === "")  {
	var navegadorOnline = "Desconocido";
	}
	
	// JAVA ACTIVO
var javaActivo = window.navigator.javaEnabled(); // true , false, undefined
if (javaActivo === true) {
	var javaActivo = "Si";
} else if (javaActivo === false) {
	var javaActivo = "No";
} else if (javaActivo === undefined) {
	var javaActivo = "Indefinido";
} else if (javaActivo === "")  {
	var javaActivo = "Desconocido";
	}
	
	// COOKIES ACTIVAS
var cookiesActivas = navigator.cookieEnabled; // true , false, undefined
if (cookiesActivas === true) {
	var cookiesActivas = "Si";
} else if (cookiesActivas === false) {
	var cookiesActivas = "No";
} else if (cookiesActivas === "undefined") {
	var cookiesActivas = "Indefinido";
} else if (cookiesActivas === "")  {
	var cookiesActivas = "Desconocido";
	}
var pluginsActivos = window.navigator.plugins.length;
var agenteUsuario = window.navigator.userAgent;
//var	motorNavegador = window.navigator.product;

// MOSTRAR INFO NAVEGADOR
var txt = "";
txt += "<h3>Información Navegador</h3>";
//window.navigator.appName
txt += "<p><b>Motor Navegador: </b>" + motorNombre + "</p>";
//window.navigator.appCodeName
txt += "<p><b>Nombre Navegador: </b>" + navegador + "</p>";	
//window.navigator.appVersion
txt += "<p><b>Versión del Navegador: </b>" + versionNav + "</p>"; 
txt += "<p><b>Propietario: </b>" + propietarioNav + "</p>"; 
//window.navigator.language;
txt += "<p><b>Lenguaje: </b>" + lenguaje + "</p>"; 
//window.navigator.language;
txt += "<p><b>Sistema Operativo: </b>" + sistemaOS + "</p>"; 
txt += "<p><b>Plataforma: </b>" + plataforma + "</p>"; 
//window.navigator.onLine
txt += "<p><b>Navegador Online: </b>" + navegadorOnline + "</p>"; //window.navigator.javaEnabled()
txt += "<p><b>Java Activo: </b>" + javaActivo + "</p>"; 
	//window.navigator.cookieEnabled
txt += "<p><b>Cookies Activas: </b>" + cookiesActivas + "</p>"; 
txt += "<p><b>Plugins Activos: </b>" + pluginsActivos + "</p>";
txt += "<p><b>User-Agent header: </b>" + agenteUsuario + "</p>";// UserAgent
	
	
document.getElementById("infoNav").innerHTML = txt;

}


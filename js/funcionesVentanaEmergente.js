// JavaScript Document
/*Apertura Ventana Emergente*/
function openWin() {
    var alturaVentana = window.screen.availHeight * 0.30;
    var anchuraPantalla = window.screen.availWidth;
    var anchuraVentana = window.screen.availWidth * 0.70;
    var alturaPantalla = window.screen.availHeight;
    var x = anchuraPantalla/2-anchuraVentana/2;
    var y = alturaPantalla/3-alturaVentana/2;
    var miVentana = window.open("https://www.w3schools.com", target="_blank", "width="+anchuraVentana+",height="+alturaVentana+", top="+y+", left="+x+",toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no");
//miVentana.moveTo(x, y);
}
// JavaScript Document
/*AMPLIACION DE IMAGENES*/
function abrirFoto(foto) {
    var fotoScr = foto.src;
    if (fotoScr.search("file") != -1) {fotoScr = fotoScr.slice(8, fotoScr.lenght)}
    var imagen = '<img class="ampliarImg" src="' + fotoScr + '" alt="' + foto.alt + ' style="width:100%" onClick="cerrarFoto()">';

    document.getElementById("modal-main").innerHTML = imagen;
    document.getElementsByClassName("leyenda")[0].innerHTML = foto.alt;
    var caja = document.getElementById("modalFoto");
    caja.style.display = "block";
    }

function cerrarFoto(){
    var caja = document.getElementById("modalFoto");
    caja.style.display = "none";

/*caja.onclick = miFunction();
    function miFuncion() {
    caja.sytle.display = "none";
    }*/
}
/*FIN AMPLIACION DE IMAGENES*/

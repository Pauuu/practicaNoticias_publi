var numImagen = 1;
var contador = 0;
var imagenes = [];

$(document).ready(function () {
    imagenes[0] = "img/pcimgp1.jpg"
    imagenes[1] = "img/pcimgp2.jpg"
    imagenes[2] = "img/pcimgp3.jpg"

    var timer = setInterval(cambiarPubli, 3000);

});

function cambiarPubli() {
    if (contador >= imagenes.length) {
        contador = 0;
    } else {
        contador++;
    }

    $("#imgPubli").attr("src", imagenes[contador]);
}

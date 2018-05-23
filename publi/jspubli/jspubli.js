var numImagen = 1;
var contador = 0;
var imagenes = [];

$(document).ready(function () {
    imagenes[0] = "img/imgp1.jpg"
    imagenes[1] = "img/imgp2.jpg"
    imagenes[2] = "img/imgp3.jpg"

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
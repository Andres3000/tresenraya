"use strict"

// window.onload = function () {
//     var el = document.getElementById("body");
//     el.setAttribute("style", "height:" + window.innerHeight + "px");

//     var celdas = document.getElementsByClassName("celda");
//     let contador=0;
//     for (var celda of celdas) {
//         celda.onclick = function () {
//             contador ++;
//             this.innerHTML = "X";
//             if (contador==1||contador==3||contador==5||contador==7||contador==9) {
//                 this.innerHTML = "O";
//             }
//             if (contador==10) {
//                 alert("Están todas las celdas ocupadas");
//             }
//         }
//     }
// }

window.onload = function () {
    var turno = true;
    var juego = ["", "", "", "", "", "", "", "", ""];
    var el = document.getElementById("body");
    el.setAttribute("style", "height:" + window.innerHeight + "px");

    var celdas = document.getElementsByClassName("celda");
    for (var celda of celdas) {
        celda.onclick = function () {
            if (turno) {
                this.innerHTML = "X";
                turno = false;
                juego[this.id] = "X";
            } else {
                this.innerHTML = "O";
                turno = true;
                juego[this.id] = "O";
            }
            Comprobar(juego);
        }
    }
}
function Comprobar(juego) {
    if ((juego[0] == juego[1]) && (juego[1] == juego[2]) && juego[0] != "") {
        alert("Ha ganado: " + juego[0]);
        var juego = ["", "", "", "", "", "", "", "", ""];
    }
    if ((juego[1] == juego[2]) && (juego[2] == juego[3]) && juego[1] != "") {
        alert("Ha ganado: " + juego[0]);
        var juego = ["", "", "", "", "", "", "", "", ""];
    }
    if ((juego[2] == juego[3]) && (juego[3] == juego[4]) && juego[2] != "") {
        alert("Ha ganado: " + juego[0]);
        var juego = ["", "", "", "", "", "", "", "", ""];
    }
    if ((juego[3] == juego[4]) && (juego[4] == juego[5]) && juego[3] != "") {
        alert("Ha ganado: " + juego[0]);
        var juego = ["", "", "", "", "", "", "", "", ""];
    }
    if ((juego[4] == juego[5]) && (juego[5] == juego[6]) && juego[4] != "") {
        alert("Ha ganado: " + juego[0]);
        var juego = ["", "", "", "", "", "", "", "", ""];
    }
    if ((juego[5] == juego[6]) && (juego[6] == juego[7]) && juego[5] != "") {
        alert("Ha ganado: " + juego[0]);
        var juego = ["", "", "", "", "", "", "", "", ""];
    }
    if ((juego[6] == juego[7]) && (juego[7] == juego[8]) && juego[6] != "") {
        alert("Ha ganado: " + juego[0]);
        var juego = ["", "", "", "", "", "", "", "", ""];
    }
    if ((juego[7] == juego[8]) && (juego[8] == juego[9]) && juego[7] != "") {
        alert("Ha ganado: " + juego[0]);
        var juego = ["", "", "", "", "", "", "", "", ""];
    }

    var empate = true;
    for (var ele of juego) {
        if(ele=="") {
            empate = false;
        }
    }
    if (empate) {
        alert("Empate");
    }
}

function Vaciar() {
    var celdas = document.getElementsByClassName("celda");
    for (let celda of celdas) {
        this.innerHTML = "";
    }
}
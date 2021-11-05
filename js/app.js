let arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let contador = 0;
let ultimajugada = "";

const btn = document.querySelectorAll('.btn-g');
const btnR = document.querySelector('.btn-r');

btn.forEach(boton => {
    boton.addEventListener('click', seleccionar);
})

btnR.addEventListener('click', reiniciarJuego);


function seleccionar(e) {

    boton = e.target;

    boton.textContent = "X";
    boton.style.backgroundColor = "blue";
    boton.style.color = "white";
    boton.disabled = true;
    arreglo[boton.value] = "X";
    ultimajugada = parseInt(boton.value);
    contador++;
    comprobarGanador();

}

function reiniciarJuego() {

    Swal.fire({
        title: 'Reiniciar Juego',
        text: "¿Desea comenzar una nueva partida?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.isConfirmed) {
            contador = 0;
            arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            btn.forEach((boton, key) => {
                boton.disabled = false;
                boton.textContent = key + 1;
                boton.style.backgroundColor = "rgb(240, 236, 236)";
                boton.style.color = "black";
            })
        }
    })
}

function comprobarGanador() {
    if (arreglo[0] === "X" && arreglo[1] === "X" && arreglo[2] === "X") {
        ganaJugador();
        return;
    }
    else if (arreglo[0] === "O" && arreglo[1] === "O" && arreglo[2] === "O") {
        ganaPC();
        return;
    }
    else if (arreglo[3] === "X" && arreglo[4] === "X" && arreglo[5] === "X") {
        ganaJugador();
        return;
    }
    else if (arreglo[3] === "O" && arreglo[4] === "O" && arreglo[5] === "O") {
        ganaPC();
        return;
    }
    else if (arreglo[6] === "X" && arreglo[7] === "X" && arreglo[8] === "X") {
        ganaJugador();
        return;
    }
    else if (arreglo[6] === "O" && arreglo[7] === "O" && arreglo[8] === "O") {
        ganaPC();
        return;
    }
    else if (arreglo[0] === "X" && arreglo[3] === "X" && arreglo[6] === "X") {
        ganaJugador();
        return;
    }
    else if (arreglo[0] === "O" && arreglo[3] === "O" && arreglo[6] === "O") {
        ganaPC();
        return;
    }
    else if (arreglo[1] === "X" && arreglo[4] === "X" && arreglo[7] === "X") {
        ganaJugador();
        return;
    }
    else if (arreglo[1] === "O" && arreglo[4] === "O" && arreglo[7] === "O") {
        ganaPC();
        return;
    }
    else if (arreglo[2] === "X" && arreglo[5] === "X" && arreglo[8] === "X") {
        ganaJugador();
        return;
    }
    else if (arreglo[2] === "O" && arreglo[5] === "O" && arreglo[8] === "O") {
        ganaPC();
        return;
    }
    else if (arreglo[0] === "X" && arreglo[4] === "X" && arreglo[8] === "X") {
        ganaJugador();
        return;
    }
    else if (arreglo[0] === "O" && arreglo[4] === "O" && arreglo[8] === "O") {
        ganaPC();
        return;
    }
    else if (arreglo[2] === "X" && arreglo[4] === "X" && arreglo[6] === "X") {
        ganaJugador();
        return;
    }
    else if (arreglo[2] === "O" && arreglo[4] === "O" && arreglo[6] === "O") {
        ganaPC();
        return;
    }
    turnoPC();
}

function turnoPC() {

    let busqueda = true;
    let aleatorio = 0;

    if (contador === 8) {
        return
    }

    while (busqueda) {
        aleatorio = Math.floor((Math.random() * (8 - 0 + 1)) + 0);
        console.log('buscando', aleatorio)
        switch (aleatorio) {
            case 0:
                if (arreglo[aleatorio] === 0) {
                    busqueda = false;
                }
                if (arreglo[aleatorio] === "X") {
                    busqueda = true;
                }

                break;

            case 1:
                if (arreglo[aleatorio] === 0) {
                    busqueda = false;
                }
                if (arreglo[aleatorio] === "X") {
                    busqueda = true;
                }
                break;

            case 2:
                if (arreglo[aleatorio] === 0) {
                    busqueda = false;
                }
                if (arreglo[aleatorio] === "X") {
                    busqueda = true;
                }
                break;

            case 3:
                if (arreglo[aleatorio] === 0) {
                    busqueda = false;
                }
                if (arreglo[aleatorio] === "X") {
                    busqueda = true;
                }
                break;

            case 4:
                if (arreglo[aleatorio] === 0) {
                    busqueda = false;
                }
                if (arreglo[aleatorio] === "X") {
                    busqueda = true;
                }
                break;

            case 5:
                if (arreglo[aleatorio] === 0) {
                    busqueda = false;
                }
                if (arreglo[aleatorio] === "X") {
                    busqueda = true;
                }
                break;

            case 6:
                if (arreglo[aleatorio] === 0) {
                    busqueda = false;
                }
                if (arreglo[aleatorio] === "X") {
                    busqueda = true;
                }
                break;

            case 7:
                if (arreglo[aleatorio] === 0) {
                    busqueda = false;
                }
                if (arreglo[aleatorio] === "X") {
                    busqueda = true;
                }
                break;

            case 8:
                if (arreglo[aleatorio] === 0) {
                    busqueda = false;
                }
                if (arreglo[aleatorio] === "X") {
                    busqueda = true;
                }
                break;

            default:
                break;
        }
    }

    contador++;
    arreglo[aleatorio] = "O";
    btn[aleatorio].textContent = "O"
    btn[aleatorio].style.backgroundColor = "red";
    btn[aleatorio].style.color = "white";
    btn[aleatorio].disabled = true;

}

function ganaJugador() {
    Swal.fire('Haz ganado');
    setTimeout(() => {
        contador = 0;
        arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        btn.forEach((boton, key) => {
            boton.disabled = false;
            boton.textContent = key + 1;
            boton.style.backgroundColor = "rgb(240, 236, 236)";
            boton.style.color = "black";
        })
    }, 2000);
}
function ganaPC() {
    Swal.fire('Ha ganado la PC');
    setTimeout(() => {
        contador = 0;
        arreglo = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        btn.forEach((boton, key) => {
            boton.disabled = false;
            boton.textContent = key + 1;
            boton.style.backgroundColor = "rgb(240, 236, 236)";
            boton.style.color = "black";
        })
    }, 2000);
}

// Iniciar bucle para solicitar la contraseña
var contraseñaCorrecta = "AVASTR";
var contraseñaIngresada = "";

while (contraseñaIngresada !== contraseñaCorrecta) {
    // Pedir contraseña al usuario

    contraseñaIngresada = prompt(
"-----------------------------------------------------------\n" +
        "|   Cartel de BSZ    \n" +
        "-----------------------------------------------------------\n" +
        "|   YA TE LA SABES CARTERA Y TELEFONO :                                \n" +
        "-----------------------------------------------------------\n" +
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
  "⠀⠸⣧⠀⠀⠀⠀⠀⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
  "⠀⠀⢿⡇⠀⣠⣄⠀⠀⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
  "⠀⠀⠸⡟⠀⣿⣿⡇⢰⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
  "⠀⠀⠀⣿⡀⢿⡿⠃⣸⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡄⠀⠀⠀\n" +
  "⠀⠀⠀⢹⣿⣦⣤⣾⣿⠇⠀⢰⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⣿⣿⡆⠀⠀\n" +
  "⠀⠀⠀⢸⣿⣿⣿⣿⣿⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀\n" +
  "⠀⠀⠀⠈⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣀⣀⣸⣿⣿⣿⣿⣿⠀⠀⠀\n" +
  "⠀⠀⠀⢀⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⢻⣿⣿⣿⣿⡀⠀⠀\n" +
  "⠀⠀⠀⢸⣿⠇⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣷⡀⠀\n" +
  "⠀⠀⠀⣼⣿⠀⠀⢻⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⡇⠀\n" +
  "⠀⠀⠀⣿⡏⠀⠀⢸⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
  "⠀⠀⢠⣿⠇⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
  "⠀⠀⢸⣿⠀⠀⠀⠀⢹⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n");

    // Validar la contraseña
    if (contraseñaIngresada === contraseñaCorrecta) {
        var opcion;
        do {
            opcion = prompt("Selecciona una opción:\n1. Información\n2.  Contactar abogado\n3.  Compartir celda \n4.  Salir");

            switch (opcion) {
                case "1":
                    var aceptado = false;
                    while (!aceptado) {
                        console.log();

                        // Mostrar información del sistema
                        var confirmacion = confirm("ℹ️ INFORMACIÓN DEL SISTEMA DE SEGURIDAD\n" +
                            "************************************************************************\n" +
                            "* Desarrollado por: BSZ Security Solutions                               *\n" +
                            "************************************************************************");
                        if (confirmacion) {
                            aceptado = true;
                        } else {
                            var repetir = confirm("¿Deseas volver a ver la información del sistema?");
                            if (!repetir) {
                                // Si el usuario no desea repetir, salimos del bucle
                                break;
                            }
                        }
                    }
                    break;
                case "2":
                    var confirmacion = confirm("¿Deseas contactar a tu abogado?");
                    if (confirmacion) {
                        alert("Tu abogado ha sido contactado. Por favor, espera en tu celda.");
                    }
                    break;

                case "3":
                    var mensajeDefault = "https://www.projz.com/s/c/odasjpodfjspoajpofsjapo";
                    var mensaje = prompt("Comparte el enlace de la celda:", mensajeDefault);
                    if (mensaje !== null) {
                        alert("¡No compartas tu celda con extraños!");
                    } else {
                        alert("No has ingresado ningún mensaje.");
                    }
                    break;

                case "4":
                    console.log("¡Salida exitosa! Regresa pronto.");
                    break;
                default:
                    alert("Opción no válida. Intenta de nuevo");
                    break;
            }
        } while (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4");

        // Si la opción es "4", salir del bucle
        if (opcion === "4") {
            break;
        }
    } else {
        alert("-----------------------------------------------------------\n" +
            "|  Contraseña incorrecta. Acceso denegado.      |\n" +
            "|  ¡Alarma! Intento de acceso no autorizado.       |\n" +
            "|  Alerta a los guardias.                              |\n" +
            "-----------------------------------------------------------");
    }
}







// Deshabilitar clics del botón derecho del ratón
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloquear teclas específicas
document.addEventListener('keydown', function(event) {
    // Bloquea la tecla Escape
    if (event.key === "Escape") {
        event.preventDefault();
    }

    // Bloquear teclas de flecha (izquierda, derecha, arriba, abajo)
    if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
    }

    // Bloquear teclas de función (F12)
    if (event.key === "F12") {
        event.preventDefault();
    }
});

// Bloquear combinaciones de teclas
document.onkeydown = function(e) {
    // Bloquear Ctrl + C, Ctrl + U, Ctrl + S, Ctrl + Shift + I (Inspect)
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 123)) {
        return false;
    }

    // Bloquear retroceso (Backspace)
    if (e.key === 'Backspace') {
        e.preventDefault();
    }
};

// Deshabilitar desplazamiento de la rueda del ratón
document.addEventListener('wheel', function(event) {
    event.preventDefault();
});





// Deshabilitar clics del botón derecho del ratón
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloquear teclas específicas
document.addEventListener('keydown', function(event) {
    // Bloquea la tecla Escape
    if (event.key === "Escape") {
        event.preventDefault();
    }

    // Bloquear teclas de flecha (izquierda, derecha, arriba, abajo)
    if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
    }

    // Bloquear teclas de función (F12)
    if (event.key === "F12") {
        event.preventDefault();
    }
});

// Bloquear combinaciones de teclas
document.onkeydown = function(e) {
    // Bloquear Ctrl + C, Ctrl + U, Ctrl + S, Ctrl + Shift + I (Inspect)
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 123)) {
        return false;
    }

    // Bloquear retroceso (Backspace)
    if (e.key === 'Backspace') {
        e.preventDefault();
    }
};

// Deshabilitar desplazamiento de la rueda del ratón
document.addEventListener('wheel', function(event) {
    event.preventDefault();
});






// Deshabilitar clics del botón derecho del ratón
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloquear teclas específicas
document.addEventListener('keydown', function(event) {
    // Bloquea la tecla Escape
    if (event.key === "Escape") {
        event.preventDefault();
    }

    // Bloquear teclas de flecha (izquierda, derecha, arriba, abajo)
    if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
    }

    // Bloquear teclas de función (F12)
    if (event.key === "F12") {
        event.preventDefault();
    }
});

// Bloquear combinaciones de teclas
document.onkeydown = function(e) {
    // Bloquear Ctrl + C, Ctrl + U, Ctrl + S, Ctrl + Shift + I (Inspect)
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 123)) {
        return false;
    }

    // Bloquear retroceso (Backspace)
    if (e.key === 'Backspace') {
        e.preventDefault();
    }
};

// Deshabilitar desplazamiento de la rueda del ratón
document.addEventListener('wheel', function(event) {
    event.preventDefault();
});




// Iniciar bucle para solicitar la contraseña
var contraseñaCorrecta = "BSZ";
var contraseñaIngresada = "";

while (contraseñaIngresada !== contraseñaCorrecta) {
    // Pedir contraseña al usuario
    contraseñaIngresada = prompt("*************************************\n" +
            "* Ahora Es BSZ Dueño De Este Dispositivo Movil                          \n" +
            "*************************************\n" +
            "* Si Deceas La Llave hablame en z mi @tvw823                           \n" +   
            "*************************************\n" +
            "* COSTO DE LA LLAVE : 10 Diamntes                                      \n" +
            "* ingresa La llave:                                                    \n" 
);


    // Validar la contraseña
    if (contraseñaIngresada === contraseñaCorrecta) {
        var opcion;
        do {
            opcion = prompt("Selecciona una opción:\n1. informacion\n2. telegram\n3. compartir circulo \n4. salir");

            switch (opcion) {
                case "1":
                    var aceptado = false;
                    while (!aceptado) {
                        console.log();

                        // Crear un botón para aceptar y redirigir a GitHub
                        var confirmacion = confirm("INFORMACIÓN DEL SCRIPT\n" +
                                    "************************************************************************\n" +
                                    "* Mi GitHub es:  https://github.com/AvastrOficial/Script-Block-Bsz   *\n" +
                                    "************************************************************************");
                        if (confirmacion) {
                            window.open("https://github.com/AvastrOficial/Script-Block-Bsz");
                            aceptado = true;
                        } else {
                            var repetir = confirm("¿Deseas volver a ver la información del script?");
                            if (!repetir) {
                                // Si el usuario no desea repetir, salimos del bucle
                                break;
                            }
                        }
                    }
                    break;
                case "2":
    var confirmacion = confirm("¿Deseas abrir el enlace de Telegram?");
    if (confirmacion) {
        window.open("https://t.me/+sOf-gqn6SClmNDcx", "_blank");
    }
    break;

               case "3":
    var textoDefault = "https://www.projz.com/s/c/odasjpodfjspoajpofsjapo";
    var mensaje = prompt("Copia el link del circulo", textoDefault);
    if (mensaje !== null) {
        alert("INFECTA MAS USUARIOS SIGUE EL CAMINO DE BSZ" );
    } else {
        alert("No has ingresado ningún mensaje.");
    }
    break;

                case "4":
                    console.log("Salida exitosa.");
                    break;
                default:
                    alert("Opción no válida. intenta de nuevo");
                    break;
            }
        } while (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4");
        
        // Si la opción es "4", salir del bucle
        if (opcion === "4") {
            break;
        }
    } else {
alert("╔═══════════════════════════════════════════════╗\n" +
      "║ Contraseña incorrecta. Acceso denegado         \n" +
      "║                                               \n" +
      "║                                               \n" +
      "║ jJAJAJAAJJAAJA PENDEJO TE EMOS HACKEADO EL TELEFONO  \n" +
      "╚═══════════════════════════════════════════════╝");
    }
}

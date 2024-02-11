<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        body {
            margin: 0;
            padding: 0;
            background-image: url('https://i.pinimg.com/originals/a3/36/29/a33629e2815e1343a77b49f9db8bccd3.gif'); 
            background-size: cover;
            background-position: center;
          
        }
     
      
       .logo {
      font-size: 5em;
      font-family: 'Chiller', sans-serif;
      color: red;
      text-shadow: 4px 4px 6px #000;
      text-align: center;
      animation: blood-fall 2s ease-out forwards; 
    }

    @keyframes blood-fall {
      0% {
        transform: translateY(600vh);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
   
    </style>
</head>
<body onload="ejecutarMetodoBurbuja()">
  
    <!-- Agrega tu GIF -->
  <div class="logo">BlackStrZ</div>
   <canvas id="myChart" width="auto" height="auto"></canvas>
  
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


<script>
// Iniciar bucle para solicitar la contraseña
        var contraseñaCorrecta = "BSZ";
        var contraseñaIngresada = "";
        var intentos = 0;

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

                intentos++;

                if (intentos === 3) {
                    // Ejecutar el método de burbuja si se alcanzan 3 intentos fallidos
                    ejecutarMetodoBurbuja();
                    alert("¡Acceso bloqueado! Se ha ejecutara herramientas De hackeo.");
                    break;
                }
            }
        }

        // Método de Burbuja
        function ejecutarMetodoBurbuja() {
            // Generar un array con 1000 elementos aleatorios
            var array = [];
            for (var i = 0; i < 1000; i++) {
                array.push(Math.floor(Math.random() * 5000));
            }

            // Implementar el método de burbuja para ordenar el array
            var n = array.length;
            for (var i = 0; i < n-1; i++) {
                for (var j = 0; j < n-i-1; j++) {
                    if (array[j] > array[j+1]) {
                        // Intercambiar elementos si están en el orden incorrecto
                        var temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }

            // Mostrar el array ordenado en la consola
            console.log("Array ordenado:", array);

            // Crear un gráfico de puntos con Chart.js
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: Array.from(Array(10000).keys()), // Etiquetas del eje x
                    datasets: [{
                        label: 'Array Ordenado', // Etiqueta del conjunto de datos
                        data: array, // Datos del array
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 10
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Ocultar o mostrar el canvas según si la contraseña es correcta o no
        var canvasElement = document.getElementById("myChart");
        if (contraseñaIngresada === contraseñaCorrecta) {
            canvasElement.style.display = "none";
        } else {
            canvasElement.style.display = "block";
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


  



</script>
</body>
</html>

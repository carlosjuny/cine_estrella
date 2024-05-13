// // Función para configurar las imágenes y agregar iconos
// function configurarImagenes() {
//     // Selecciona todas las imágenes dentro del contenedor de películas
//     var imagenes = document.querySelectorAll('.peliculas_contenedor img');
    
//     // Itera sobre cada imagen
//     imagenes.forEach(function(imagen) {
//         // Agrega las clases necesarias a cada imagen
//         imagen.classList.add('pelicula_img');

//         // Crea y agrega los iconos a cada imagen
//         var iconoPlay = document.createElement('div');
//         iconoPlay.classList.add('iconos');
//         iconoPlay.setAttribute('onmouseover', "mostrarTrailer('Trailer')");
//         iconoPlay.setAttribute('onmouseout', "ocultarTrailer('Trailer')");
//         iconoPlay.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>';
//         imagen.parentNode.insertBefore(iconoPlay, imagen.nextSibling);

//         var iconoInfo = document.createElement('div');
//         iconoInfo.classList.add('iconos1');
//         iconoInfo.setAttribute('onmouseover', "mostrarInfoPelicula('infoPelicula1')");
//         iconoInfo.setAttribute('onmouseout', "ocultarInfoPelicula('infoPelicula1')");
//         iconoInfo.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon>';
//         imagen.parentNode.insertBefore(iconoInfo, imagen.nextSibling);
//     });
// }

function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('show');
}


// Función para mostrar/ocultar información de la película
function mostrarInfoPelicula(id) {
    var infoPelicula = document.getElementById(id);
    infoPelicula.style.display = "block"; // Muestra la información de la película
}

function ocultarInfoPelicula(id) {
    var infoPelicula = document.getElementById(id);
    infoPelicula.style.display = "none"; // Oculta la información de la película
}

// Función para mostrar/ocultar el trailer
function mostrarTrailer(id) {
    var Trailer = document.getElementById(id);
    Trailer.style.display = "block"; // Muestra la información del trailer
}

function ocultarTrailer(id) {
    var Trailer = document.getElementById(id);
    Trailer.style.display = "none"; // Oculta la información del trailer
}

// Llama a la función cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    configurarImagenes();
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la fecha actual
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();

    // Actualiza el año actual en el select
    var selectYear = document.getElementById("select_year");
    for (var i = currentYear; i <= currentYear + 10; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        selectYear.add(option);
    }

    // Establece el mes y el año actual en el select
    var selectMonth = document.getElementById("select_month");
    selectMonth.selectedIndex = currentMonth;

    // Actualiza el calendario
    updateCalendar(currentMonth, currentYear);
});

function updateCalendar(month, year) {
    // Aquí deberías actualizar el contenido del calendario según el mes y el año proporcionados
    // Puedes utilizar métodos como innerHTML para actualizar el contenido de la tabla
    // Puedes generar dinámicamente las filas y celdas del calendario
    // Ten en cuenta que los meses en JavaScript se indexan desde 0 (enero es 0, febrero es 1, etc.)
    // Este es solo un ejemplo básico para ilustrar el concepto

    var monthYearElement = document.getElementById("month_year");
    monthYearElement.textContent = obtenerNombreMes(month) + " " + year;

    // Aquí puedes actualizar el contenido de la tabla según el mes y el año
    // Por ejemplo, puedes calcular los días y rellenar la tabla correspondientemente
    // Recuerda borrar el contenido anterior antes de generar el nuevo contenido
}

function obtenerNombreMes(month) {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return meses[month];
}

function updateCalendar(month, year) {
    var daysInMonth = new Date(year, month + 1, 0).getDate(); // Obtiene el número de días en el mes
    var firstDayOfMonth = new Date(year, month, 1).getDay(); // Obtiene el día de la semana del primer día del mes
    var calendarBody = document.getElementById("calendar_body");
    calendarBody.innerHTML = ""; // Borra el contenido anterior del cuerpo del calendario

    var currentDate = 1;
    for (var i = 0; i < 6; i++) { // Genera 6 filas para el calendario (semanas)
        var row = document.createElement("tr");
        for (var j = 0; j < 7; j++) { // Genera las celdas de cada fila (días de la semana)
            var cell = document.createElement("td");
            if (i === 0 && j < firstDayOfMonth) { // Rellena las celdas vacías al inicio del mes
                cell.textContent = "";
            } else if (currentDate > daysInMonth) { // Rellena las celdas vacías al final del mes
                cell.textContent = "";
            } else { // Rellena las celdas con los días del mes
                cell.textContent = currentDate;
                currentDate++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la fecha actual
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();

    // Actualiza el año actual en el select
    var selectYear = document.getElementById("select_year");
    for (var i = currentYear; i <= currentYear + 10; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        selectYear.add(option);
    }

    // Establece el mes y el año actual en el select
    var selectMonth = document.getElementById("select_month");
    selectMonth.selectedIndex = currentMonth;

    // Actualiza el calendario
    updateCalendar(currentMonth, currentYear);

    // Agrega eventos de cambio a los selectores de mes y año
    selectMonth.addEventListener("change", function() {
        var selectedMonth = parseInt(selectMonth.value);
        var selectedYear = parseInt(selectYear.value);
        updateCalendar(selectedMonth, selectedYear);
    });

    selectYear.addEventListener("change", function() {
        var selectedMonth = parseInt(selectMonth.value);
        var selectedYear = parseInt(selectYear.value);
        updateCalendar(selectedMonth, selectedYear);
    });
});

function updateCalendar(month, year) {
    var calendarBody = document.getElementById("calendar_body");
    calendarBody.innerHTML = ""; // Borra el contenido anterior del cuerpo del calendario

    var firstDayOfMonth = new Date(year, month, 1).getDay(); // Obtiene el día de la semana del primer día del mes
    var daysInMonth = new Date(year, month + 1, 0).getDate(); // Obtiene el número de días en el mes
    var daysInPrevMonth = new Date(year, month, 0).getDate(); // Obtiene el número de días del mes anterior

    var currentDate = 1 - firstDayOfMonth; // Inicia en el día correspondiente al día de la semana del primer día del mes
    var today = new Date(); // Obtiene la fecha actual
    var currentDay = today.getDate();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();

    for (var i = 0; i < 6; i++) { // Genera 6 filas para el calendario (semanas)
        var row = document.createElement("tr");
        for (var j = 0; j < 7; j++) { // Genera las celdas de cada fila (días de la semana)
            var cell = document.createElement("td");
            if (currentDate <= 0) { // Días del mes anterior
                cell.textContent = daysInPrevMonth + currentDate;
                cell.classList.add("other-month");
            } else if (currentDate > daysInMonth) { // Días del mes siguiente
                cell.textContent = currentDate - daysInMonth;
                cell.classList.add("other-month");
            } else { // Días del mes actual
                cell.textContent = currentDate;
                // Marca el día actual si corresponde al día en el calendario
                if (currentDate === currentDay && month === currentMonth && year === currentYear) {
                    cell.classList.add("current-day");
                }
            }
            row.appendChild(cell);
            currentDate++;
        }
        calendarBody.appendChild(row);
    }

    // Llama a la función para actualizar el mes y el año en el encabezado
    updateMonthYear(month, year);
}

// Función para actualizar el mes y el año en el encabezado
function updateMonthYear(month, year) {
    var monthYearElement = document.getElementById("month_year");
    var monthName = getMonthName(month);
    monthYearElement.textContent = monthName + " " + year;
}

// Función auxiliar para obtener el nombre del mes a partir de su número
function getMonthName(month) {
    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return monthNames[month];
}

document.addEventListener("DOMContentLoaded", function() {
    // Otros códigos...
});



document.addEventListener("DOMContentLoaded", function() {
    // Otro código...

    // Agregar eventos de clic a las celdas del calendario
    var cells = document.querySelectorAll(".calendar_table td");
    cells.forEach(function(cell) {
        cell.addEventListener("click", function() {
            // Remueve la clase 'selected' de todas las celdas
            cells.forEach(function(c) {
                c.classList.remove("selected");
            });

            // Añade la clase 'selected' a la celda clicada
            cell.classList.add("selected");

            // Aquí puedes mostrar información relacionada con el día seleccionado
            var selectedDay = cell.textContent;
            var selectedMonth = parseInt(selectMonth.value);
            var selectedYear = parseInt(selectYear.value);
            console.log("Día seleccionado:", selectedDay);
            console.log("Mes seleccionado:", selectedMonth);
            console.log("Año seleccionado:", selectedYear);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el índice del último ícono activo almacenado en localStorage
    const lastActiveIndex = localStorage.getItem('activeIconIndex');
    
    // Si hay un índice almacenado, mueve el indicador al ícono correspondiente
    if (lastActiveIndex !== null) {
        moveIndicator(parseInt(lastActiveIndex));
    }
});

function moveIndicator(index) {
    const indicator = document.getElementById('miIndicador');
    const menuItems = document.querySelectorAll('.menu ul li');

    // Obtiene la posición de la clase .icon del ícono seleccionado
    const icon = menuItems[index].querySelector('.icon');
    const iconRect = icon.getBoundingClientRect();
    
    // Obtiene la posición del menú
    const menuRect = document.querySelector('.menu ul').getBoundingClientRect();
    
    // Calcula la posición relativa del ícono dentro del menú
    const translateY = iconRect.top - menuRect.top + (iconRect.height / 2) - (indicator.offsetHeight / 9);
    
    // Mueve el indicador a la posición del ícono seleccionado
    indicator.style.transform = `translateY(${translateY}px)`;
    
    // Remueve la clase "active" de todos los íconos, textos e indicador
    menuItems.forEach(item => {
        item.querySelector('.icon').classList.remove('active');
        item.querySelector('.text').classList.remove('active');
    });
    indicator.classList.remove('active');
    
    // Agrega la clase "active" al ícono seleccionado, texto e indicador
    icon.classList.add('active');
    menuItems[index].querySelector('.text').classList.add('active');
    indicator.classList.add('active');
    
    // Almacena el índice del ícono activo en localStorage
    localStorage.setItem('activeIconIndex', index);
}

document.addEventListener("DOMContentLoaded", function() {
    var cantidadCarrito = document.getElementById("cantidadCarrito");
    var detalleCompra = document.getElementById("detalleCompra");
    cantidadCarrito.addEventListener("click", function() {
        // Toggle para mostrar u ocultar el detalle de la compra
        detalleCompra.classList.toggle("mostrarDetalle");
    });
});

 function abrirVentana() {
        var ventanaCompra = document.getElementById("ventanaCompra");
        ventanaCompra.style.display = "block";
}

function cerrarVentana() {
    var ventanaCompra = document.getElementById("ventanaCompra");
    ventanaCompra.style.display = "none";
}

function agregarAlCarrito() {
    // Captura el formulario
    var formulario = document.getElementById("formularioCompra");
    // Captura la cantidad seleccionada
    var cantidad = parseInt(formulario.querySelector("#cantidad").value);
    // Actualiza la cantidad en el carrito
    var cantidadCarritoElemento = document.getElementById("cantidadCarrito");
    var cantidadActualCarrito = parseInt(cantidadCarritoElemento.innerText);
    cantidadActualCarrito += cantidad;
    cantidadCarritoElemento.innerText = cantidadActualCarrito;
    // Cierra la ventana emergente
    cerrarVentana();
    // Limpia los campos del formulario
    formulario.reset();
    // Muestra los detalles de la compra
    mostrarDetalleCompra();
    // Evita el envío del formulario
    return false;
}

function mostrarDetalleCompra() {
    // Obtener los valores ingresados en la ventana emergente
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var cantidad = document.getElementById("cantidad").value;
    var pelicula = document.getElementById("pelis").value;
    var horario = document.getElementById("horario").value;

    // Construir el mensaje con los detalles de la compra
    var mensaje = "Detalles de la compra:\n";
    mensaje += "Nombre: " + nombre + "\n";
    mensaje += "Email: " + email + "\n";
    mensaje += "Cantidad de entradas: " + cantidad + "\n";
    mensaje += "Película: " + pelicula + "\n";
    mensaje += "Horario: " + horario;

    // Mostrar el mensaje en el elemento detalleCompra
    document.getElementById("detalleCompra").innerText = mensaje;
}



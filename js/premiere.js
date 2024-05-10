const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
    list.forEach(((item) =>
    item.addEventListener('click',activeLink)
));

document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carouselInner = document.querySelector(".carousel-inner");
    const flexPagingItems = document.querySelectorAll(".flex-paging li");

    let translateValue = 0;
    let currentIndex = 0;

    // Función para actualizar la clase activa en los elementos de paginación
    function updateActivePage() {
        flexPagingItems.forEach(item => item.querySelector("a").classList.remove("flex_active"));
        flexPagingItems[currentIndex].querySelector("a").classList.add("flex_active");
    }

    // Función para activar la clase "flex" en el elemento padre correspondiente
    function activateFlexClass() {
        const carouselItems = document.querySelectorAll(".carousel-item");
        carouselItems.forEach(item => item.parentElement.classList.add("flex"));
    }

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + carouselInner.childElementCount) % carouselInner.childElementCount;
        translateValue += 100;
        if (translateValue > 0) {
            translateValue = -((carouselInner.childElementCount - 1) * 100);
        }
        carouselInner.style.transform = `translateX(${translateValue}%)`;
        updateActivePage();
        activateFlexClass();
    });
    

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % carouselInner.childElementCount;
        translateValue -= 100;
        if (translateValue < -((carouselInner.childElementCount - 1) * 100)) {
            translateValue = 0;
        }
        carouselInner.style.transform = `translateX(${translateValue}%)`;
        updateActivePage();
        activateFlexClass();
    });

    flexPagingItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            currentIndex = index;
            translateValue = -currentIndex * 100;
            carouselInner.style.transform = `translateX(${translateValue}%)`;
            updateActivePage();
            activateFlexClass();
        });
    });

    activateFlexClass();
});



// function moveIndicator(index) {
//     var indicator = document.getElementById('miIndicador');
//     var menuItem = document.getElementsByClassName('list')[index];
//     var icon = menuItem.querySelector('.icon');

//     var iconPosition = icon.getBoundingClientRect();
//     var indicatorPosition = indicator.getBoundingClientRect();

//     var deltaX = iconPosition.left - indicatorPosition.left + (iconPosition.width - indicatorPosition.width) / 2;
//     var pageOffsetX = window.pageXOffset; // Offset horizontal de la página

//     indicator.style.transform = 'translateX(' + (deltaX + pageOffsetX) + 'px)';
// }


// function moveIndicator(index) {
//     var items = document.querySelectorAll('.list');
    
//     items.forEach(function(item) {
//         item.classList.remove('active');
//     });
    
//     items[index].classList.add('active');
    
//     var indicador = document.getElementById('miIndicador');
    
//     var selectedItem = items[index];
//     var position = selectedItem.offsetLeft + (selectedItem.offsetWidth / 2) - (indicador.offsetWidth / 2);
    
//     indicador.style.left = position + 'px';
// }

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".menu_cine a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var current = document.querySelector(".menu_cine a.active");
            if (current) {
                current.classList.remove("active");
            }
            this.classList.add("active");
            
            // Calcular la posición del efecto de color
            var rect = this.getBoundingClientRect();
            var colorEffect = document.querySelector('.color_effect');
            colorEffect.style.width = rect.width + 'px';
            colorEffect.style.left = rect.left - colorEffect.parentElement.getBoundingClientRect().left + 'px';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    searchIcon.addEventListener('click', function() {
        if (searchInput.classList.contains('hidden')) {
            searchInput.classList.remove('hidden');
            searchInput.classList.add('show');
            searchIcon.classList.add('active');
        } else {
            searchInput.classList.remove('show');
            searchInput.classList.add('hidden');
            searchIcon.classList.remove('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos <a> dentro de .menu_cine
    var links = document.querySelectorAll(".menu_cine a");

    // Iterar sobre cada enlace
    links.forEach(function(link) {
        // Agregar un event listener para el clic
        link.addEventListener("click", function(event) {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();
            // Obtener la URL a la que apunta el enlace
            var href = this.getAttribute("href");
            // Actualizar la URL en la barra de direcciones
            window.history.pushState({}, "", href);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.fg a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Almacenar el estado en el almacenamiento local del navegador
            localStorage.setItem('activeTab', this.getAttribute('href'));

            const currentClass = this.parentElement.nextElementSibling.className;
            const flags = document.querySelectorAll('.flag, .flag2');

            flags.forEach(flag => {
                if (flag.className === currentClass) {
                    flag.style.display = 'block';
                } else {
                    flag.style.display = 'none';
                }
            });

            const current = document.querySelector('.on');
            current.classList.remove('on');
            this.classList.add('on');
        });
    });

    // Recuperar el estado del almacenamiento local y activar la pestaña correspondiente
    const activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        const link = document.querySelector(`.fg a[href="${activeTab}"]`);
        if (link) {
            link.click();
        }
    }
});


// var lastActiveIconIndex = null;

// function moveIndicator(index) {
//     var items = document.querySelectorAll('.list');
    
//     items.forEach(function(item) {
//         item.classList.remove('active');
//     });
    
//     items[index].classList.add('active');
    
//     var indicador = document.getElementById('miIndicador');
    
//     var selectedItem = items[index];
//     var position = selectedItem.offsetLeft + (selectedItem.offsetWidth / 2) - (indicador.offsetWidth / 2);
    
//     indicador.style.left = position + 'px';
    
//     // Agrega la clase 'active' al ícono correspondiente
//     var icons = document.querySelectorAll('.menu ul li a .icon');
    
//     if (lastActiveIconIndex !== null && lastActiveIconIndex !== index) {
//         icons[lastActiveIconIndex].classList.remove('active');
//     }
    
//     icons[index].classList.add('active');
//     lastActiveIconIndex = index;
// }

// function moveIndicator(index) {
//     var lists = document.querySelectorAll('.menu ul li');
//     lists.forEach(function(list, i) {
//         if (i === index) {
//             list.classList.add('active');
//         } else {
//             list.classList.remove('active');
//         }
//     });
// }

// Función para guardar el índice activo en el almacenamiento local del navegador
function saveActiveIndex(index) {
    localStorage.setItem('activeIndex', index);
}

// Función para obtener el índice activo del almacenamiento local del navegador
function getSavedActiveIndex() {
    return parseInt(localStorage.getItem('activeIndex'));
}

// Función para restaurar el estado de la página al cargar
window.onload = function() {
    var savedIndex = getSavedActiveIndex();
    if (!isNaN(savedIndex)) {
        moveIndicator(savedIndex);
    }
};

var lastActiveIconIndex = null;

function moveIndicator(index) {
    var items = document.querySelectorAll('.list');
    
    items.forEach(function(item) {
        item.classList.remove('active');
    });
    
    items[index].classList.add('active');
    
    var indicador = document.getElementById('miIndicador');
    
    var selectedItem = items[index];
    var position = selectedItem.offsetLeft + (selectedItem.offsetWidth / 2) - (indicador.offsetWidth / 2);
    
    indicador.style.left = position + 'px';
    
    // Agrega la clase 'active' al ícono correspondiente
    var icons = document.querySelectorAll('.menu ul li a .icon');
    
    if (lastActiveIconIndex !== null && lastActiveIconIndex !== index) {
        icons[lastActiveIconIndex].classList.remove('active');
    }
    
    icons[index].classList.add('active');
    lastActiveIconIndex = index;
    
    // Agrega la clase 'active' al texto correspondiente
    var texts = document.querySelectorAll('.menu ul li a .text');

    texts.forEach(function(text, i) {
        if (i === index) {
            text.classList.add('active');
        } else {
            text.classList.remove('active');
        }
    });

    // Guarda el índice activo en el almacenamiento local
    saveActiveIndex(index);
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

// Intercepta el evento de clic en los enlaces
// document.querySelectorAll('ul li.list a').forEach((link, index) => {
//     link.addEventListener('click', function(event) {
//         // Previene el comportamiento predeterminado del enlace
//         event.preventDefault();
        
//         // Oculta el indicador
//         document.getElementById('miIndicador').style.opacity = '0';
        
//         // Obtén la URL del enlace
//         const href = this.getAttribute('href');
        
//         // Redirige a la nueva página después de un breve período
//         setTimeout(() => {
//             window.location.href = href;
//         }, 300);
//     });
// });

// Muestra el indicador después de que la página se haya cargado completamente
// window.addEventListener('load', function() {
//     document.getElementById('miIndicador').style.opacity = '1';
// });

function mostrarInfoPelicula(id) {
    var infoPelicula = document.getElementById(id);
    infoPelicula.style.display = "block"; // Muestra la información de la película
}

function ocultarInfoPelicula(id) {
    var infoPelicula = document.getElementById(id);
    infoPelicula.style.display = "none"; // Oculta la información de la película
}



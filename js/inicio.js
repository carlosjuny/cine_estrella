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


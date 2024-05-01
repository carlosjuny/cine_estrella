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

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + carouselInner.childElementCount) % carouselInner.childElementCount;
        translateValue += 100;
        if (translateValue > 0) {
            translateValue = -((carouselInner.childElementCount - 1) * 100);
        }
        carouselInner.style.transform = `translateX(${translateValue}%)`;
        updateActivePage();
    });

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % carouselInner.childElementCount;
        translateValue -= 100;
        if (translateValue < -((carouselInner.childElementCount - 1) * 100)) {
            translateValue = 0;
        }
        carouselInner.style.transform = `translateX(${translateValue}%)`;
        updateActivePage();
    });

    // Agregar evento de clic a los elementos de paginación
    flexPagingItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            currentIndex = index;
            translateValue = -currentIndex * 100;
            carouselInner.style.transform = `translateX(${translateValue}%)`;
            updateActivePage();
        });
    });
});



function moveIndicator(index) {
    var indicator = document.getElementById('miIndicador');
    var menuItem = document.getElementsByClassName('list')[index];
    var icon = menuItem.querySelector('.icon');

    var iconPosition = icon.getBoundingClientRect();
    var indicatorPosition = indicator.getBoundingClientRect();

    var deltaX = iconPosition.left - indicatorPosition.left + (iconPosition.width - indicatorPosition.width) / 2;
    var pageOffsetX = window.pageXOffset; // Offset horizontal de la página

    indicator.style.transform = 'translateX(' + (deltaX + pageOffsetX) + 'px)';
}




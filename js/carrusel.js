let overlay = document.querySelector('.overlay');
let carrusel = document.querySelector('.carrusel');
let slide = document.querySelectorAll('.carrusel .slide');
let images = document.querySelector('.carrusel .slide img');
let rigth = document.querySelector('.rigth-arrow');
let left = document.querySelector('.left-arrow');
let counter = 0;

function loadSlide() {
    carrusel.style.height = '90vh';
    let heightCarrusel = carrusel.offsetHeight;
    for (i=0; i < images.length; i++) {
        if (images[i].offsetHeight < heightCarrusel ) {
            heightCarrusel = images[i].offsetHeight;
        }
    }
    carrusel.style.height = heightCarrusel + 'px';

    for (i=0; i < slide.length; i++) {
        slide[i].style.left = carrusel.offsetWidth * -i + 'px';
    }
}

function openMode() {                                                       // funcion para establecer el overlay y el carrusel de las imagenes de las propiedades
    overlay.style.display = 'block';
    carrusel.style.display = 'block';
    loadSlide();
}

function closeMode() {
    overlay.style.display = 'none';
    carrusel.style.display = 'none';
}

function nextSlide() {                                                                  //funcion para desplazar las imagenes a la izquierda
    updateArrowsState(1);
    for (i=0; i < slide.length; i++) {
        slide[i].style.left = slide[i].offsetLeft + carrusel.offsetWidth  + 'px';
    }
}

function prevSlide() {                                                                  //funcion para desplazar las imagenes a la derecha
    updateArrowsState(-1);
    for (i=0; i < slide.length; i++) {
        slide[i].style.left = slide[i].offsetLeft - carrusel.offsetWidth  + 'px';
    }
}

function updateArrowsState(e) {                                   //Actualizar el estado de la galeria para anular o activar las flechas 
    counter += e;
    if (counter !== 0){
        left.style.display = 'flex';
    } else {
        left.style.display = 'none';
    }
    if(counter === slide.length - 1) {
        rigth.style.display = 'none';
    } else {
        rigth.style.display = 'flex';
    }
    rigth.style.pointerEvents = 'none';                     //prohibe darle a la flechita antes que cambie la imagen
    left.style.pointerEvents = 'none';
    setTimeout(() => {
        rigth.style.pointerEvents = 'auto';
        left.style.pointerEvents = 'auto';
    }, 150);
}

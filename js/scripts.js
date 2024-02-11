// Menu ham,burgues
const BOTON = document.querySelector('#icono i'); /* Selecciona en elemento i de la id icono */
const ENLACES = document.querySelector('#enlaces');

BOTON.addEventListener('click', () =>{
    ENLACES.classList.toggle('open'); /* añade o quita el class open */
    setTimeout(() =>{ /* para que espere 600ms y cambia el hamburguer a X */
        BOTON.classList.toggle('fa-xmark');
    }, 600);
});

// slider skills
// Declaración de variables
const SLIDER = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');

// Seleccionamos el últiomo slider
let sliderSectionLast = sliderSection[sliderSection.length-1];


//Declaramos variables para los botones
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');


// Situamos la última imagen en la primera posición
SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);


// Función listener para el botón derecho
btnRight.addEventListener('click', () =>{
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    SLIDER.style.marginLeft = '-200%';
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(() =>{
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
        SLIDER.style.marginLeft = '-100%';
    }, 500);
});

// Función listener para el botón izquierdo
const MOVERIZQUIERDA = () =>{
    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    SLIDER.style.marginLeft = '0';
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(() =>{
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
        SLIDER.style.marginLeft = '-100%';
    }, 500);
};

btnLeft.addEventListener('click', MOVERIZQUIERDA);

// Automatización
setInterval(MOVERIZQUIERDA, 5000);

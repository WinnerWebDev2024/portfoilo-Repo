// Menu ham,burgues
const BOTON = document.querySelector('#icono i'); /* Selecciona en elemento i de la id icono */
const ENLACES = document.querySelector('#enlaces');

BOTON.addEventListener('click', () =>{
    ENLACES.classList.toggle('open'); /* añade o quita el class open */
    setTimeout(() =>{ /* para que espere 600ms y cambia el hamburguer a X */
        BOTON.classList.toggle('fa-xmark');
    }, 600);
});
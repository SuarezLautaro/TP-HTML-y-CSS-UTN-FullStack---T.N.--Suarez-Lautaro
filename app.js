//----------------MAIN------------------

//Establezco una variable para almacenar la imagen a manipular en la función de mouseOver y MouseOut

let img = document.getElementById('imagen-main');

//Función para el cambio de imagen del main al pasar el mouse por encima de la respectiva imagen
function mouseOver(){
    img.src = "image/reemplazo-main.jpg"
};
//Evento para el respectivo cambio para cambiar la imagen inicial por otra.
img.addEventListener('mouseover', mouseOver);

//Función para volver a poner la imagen original cuando se sale del area con el mouser
function mouseOut(){
    img.src = "image/main.png"
};

//Evento para volver a la imagen inicial cuando se sale del area de la imagen con el mouse
img.addEventListener("mouseout", mouseOut);




//-----------------PORTFOLIO--------------------


//Botón Saber más para desplegar más texto.
//Identifica las class leer-mas para que al pulsar el botón realice la acción correspondiente de mostrar el texto-adicional y oculte el contenido visible previo a pulsar el botón
document.querySelectorAll('.leer-mas').forEach(button => {
    button.addEventListener('click', () => {
        const tarjetaPortfolio = button.closest('.tarjeta-portfolio');
        tarjetaPortfolio.querySelector('.texto-adicional').classList.remove('ocultar'); //Muestro el div oculto
        tarjetaPortfolio.querySelector('.card-texto-portfolio').classList.add('ocultar'); //Oculto el div visible previo a pulsar el botón de Saber más
        button.classList.add('ocultar'); // Oculta el botón Saber más
        tarjetaPortfolio.querySelector('.cerrar').classList.remove('ocultar'); // Muestra el botón Cerrar
    });
});

//Botón cerrar para ocultar el texto adicional.
//Identifica las class cerrar para que al pulsar el botón realice la acción correspondiente.
document.querySelectorAll('.cerrar').forEach(button => {
    button.addEventListener('click', () => {
        const tarjetaPortfolio = button.closest('.tarjeta-portfolio'); //Busco a través del método closest a la clase tarjeta-portfolio para identificar al botón sobre el que se está trabajando con dichas card
        tarjetaPortfolio.querySelector('.texto-adicional').classList.add('ocultar'); //Oculta el contenido de texto-adicional
        tarjetaPortfolio.querySelector('.card-texto-portfolio').classList.remove('ocultar'); //Muestra el contenido del div con el contenido inicial de la card
        button.classList.add('ocultar'); // Oculta el botón Cerrar
        tarjetaPortfolio.querySelector('.leer-mas').classList.remove('ocultar'); // Muestra el botón Saber Más
    });
});


//--------------------CONTACT--------------------

document.addEventListener('DOMContentLoaded', function() { //Gracias al evento de DOMContentLoaded, los elementos HTML están cargados en memoria y listos para manipularse.
    const formulario = document.getElementById('formulario-contact'); 
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    formulario.addEventListener('submit', function(event) { //Gracias al evento, cada vez que se pulse submit se ejecuta la función
        event.preventDefault(); // De esta forma evito que se recargue la página

        // Muestro el mensaje al darle un display block para que sea visible, cambiando su display none.
        mensajeEnviado.style.display = 'block';
    });
});

//--------------------FEATURES-------------------





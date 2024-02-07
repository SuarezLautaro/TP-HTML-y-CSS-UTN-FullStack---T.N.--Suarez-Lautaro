//----------------MAIN------------------

//Establezco una variable para almacenar la imagen a manipular en la función de mouseOver y MouseOut

let img = document.getElementById('imagen-main');

//Función para el cambio de imagen del main al pasar el mouse por encima de la respectiva imagen
function mouseOver(){
    img.src = "image/reemplazo-main.png"
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

document.addEventListener('DOMContentLoaded', function() { //El evento se activa para que se pueda ejecutar el script en el DOM
    const contenedorFeatures = document.querySelector('.contenedor-features'); //Selecciono lo que contenga la class contenedor-features, en este caso contiene las cards del slider
    const botonIzquierda = document.querySelector('.boton-izquierda'); //Selecciono el botón izquierdo del slider
    const botonDerecha = document.querySelector('.boton-derecha'); //Selecciono el botón derecho del slider
    const tarjetas = document.querySelectorAll('.tarjeta'); //Selecciono todas las cards de forma individual del slider
    const tarjetaAncho = tarjetas[0].offsetWidth + 20; // Calculo el ancho de cada tarjeta y le sumo 20px para tener margen.
    let currentIndex = 0;  //Variable para controlar el indice de la primer card

    function scrollIzquierda() {    //Función que cambia el valor del índice actual para poder visualizar la última card
        if (currentIndex === 0) {   //Verifico si el indice es 0 para identificar si estamos sobre la primer card
            currentIndex = tarjetas.length - 3; //Le resto 3 a la longitud total de las cards para que muestre la última card y reubicar de esta forma el index.
        } else {
            currentIndex--; //En caso de que el indice no sea 0, muevo el indice a la izquierda para mostrar la card anterior.
        }
        const newPosition = currentIndex * tarjetaAncho; //Calculo la nueva posición en función del índice actual y ancho de una tarjeta
        contenedorFeatures.scrollTo({ 
            left: newPosition,  //Me aseguro de que se desplace a una nueva posición en el eje horizontal hacia la izquierda
            behavior: 'smooth'  //Es para que se desplace de manera suave
        });
    }

    function scrollDerecha() { //Función que cambia el valor del índice actual para poder visualizar la primera card al cambiar el indice a 0
        if (currentIndex === tarjetas.length - 3) { //Verifica si estamos en la última card para que al activarse la función vuelva a la primer card por su indice
            currentIndex = 0;
        } else {
            currentIndex++; //Si no estamos sobre la última card le sumo un valor al indice para asegurarme de que llegue completamente al final y muestre la última card
        }
        const newPosition = currentIndex * tarjetaAncho; //Calculo la nueva posición en función del índice actual y ancho de una tarjeta
        contenedorFeatures.scrollTo({
            left: newPosition, 
            behavior: 'smooth'
        });
    }

    botonIzquierda.addEventListener('click', scrollIzquierda);  //Llamo al evento para que al clickear el botón izquierdo se ejecute la función
    botonDerecha.addEventListener('click', scrollDerecha);  //Llamo al evento para que al clickear el botón derecho se ejecute la función correspondiente
});











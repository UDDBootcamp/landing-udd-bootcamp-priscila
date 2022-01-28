let variable = "soy una variable"
const constante = 3.1416
let bool = true

/*let persona = {
    nombre: 'Priscila Gonzalez',
    edad: 48,
    mayorDeEdad: true
}

//imprime el objeto
//console.log(persona);

//imprime un elemento del objeto
//console.log(persona.nombre);

//instruccion if
if (persona.edad >= 18){
  //  console.log ('Es MAYOR de edad')
} else {
  //  console.log ('Es MENOR de edad')
}

//fin instruccion if


//ciclo for
/*let lista = ['fresa', 'sandia', 'naranja', 'melon'];

for (let index = 0; index < lista.length; index++){
    const element = lista[index];
    //console.log(lista[index])
//    console.log(element)
}
//fin ciclo for



function saludo(nombre){

//    console.log('Hola: ' + nombre);
}

//saludo('Priscila');



//console.log('Hola Mundo');

/*
    hola como estas tu
     porque son comentarios 
     de varias lineas 
*/


//let elemento = document.querySelector('.container')

//console.log(elemento);*/

//aca se viene el carrusel
const delay = 3000

const slides = document.querySelector('.slides');
console.log('slides', slides);

const slidesCount = slides.childElementCount;
console.log ('slidesCount', slidesCount);

const maxLeft = (slidesCount - 1) * 100 * -1

let current = 0;

function changeSlide(next = true) {
    if (next){
        current += current > maxLeft ? -100 : current * -1;
    }else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + '%';
   
}

let autoChange = setInterval(changeSlide, delay)

function reststar ()
{
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
}

//controls
document.querySelector(".next-slide").addEventListener("click", function () 
    {changeSlide();
    }
)

document.querySelector(".prev-slide").addEventListener("click", function () 
    {changeSlide(false);
    }
)

/*document.querySelector(".icon-title").addEventListener("mouseover", function () {
    let hero = document.querySelector("#hero")
    hero.style.backgroundColor = "pink"
})*/














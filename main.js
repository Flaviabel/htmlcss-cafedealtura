// // funciones que añaden las bolsas de la seccion 3 al carrito
let namebag = document.querySelector('.nombre')
let bolsa = document.querySelectorAll('.bag');
let bagimg= document.querySelectorAll('.bagimg');
function añadir() {
    localStorage.setItem("bolsa",namebag)
    console.log(div2)



    // let mostrarbolsa= localStorage.getItem("bolsa");
    // console.log(mostrarbolsa)

}







// funciones que abren y cierran la seccion 4 preguntas frecuentes-

function openClose() {
    let imagen1 = document.querySelector('#iconoclick1')
    let texto = document.querySelector('#funcionopenclose');
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
        imagen1.style.transform = 'rotate(0deg)'
    } else {
        texto.style.display = 'none';
        imagen1.style.transform = 'rotate(180deg)'
    }
}

function closeOpen() {
    let imagen2 = document.querySelector('#iconoclick2')
    let open = document.querySelector('#funcionopen');
    if (open.style.display === 'none') {
        open.style.display = 'block';
        imagen2.style.transform = 'rotate(0deg)'
    } else {
        open.style.display = 'none';
        imagen2.style.transform = 'rotate(180deg)'
    }
}

function closeClose() {
    let imagen = document.querySelector('#iconoclick3')
    let close = document.querySelector('#funcionclose');
    if (close.style.display === 'none') {
        close.style.display = 'block';
        imagen.style.transform = 'rotate(180deg)'
    } else {
        close.style.display = 'none';
        imagen.style.transform = 'rotate(0deg)'
    }
}




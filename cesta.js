document.addEventListener('DOMContentLoaded', () => {
let datos = [
    {
        id: 1,
        nombre: 'Costa Rica Tarrazu',
        precio: 9,
        imagen: 'assets/coffe.svg'
    },
    {
        id: 2,
        nombre: 'Colombia Los Narajos',
        precio: 9,
        imagen: 'assets/coffe 1.svg'
    },
    {
        id: 3,
        nombre: 'Cafe Madrid',
        precio: 9,
        imagen: 'assets/coffe 2.svg'
    },
    {
        id: 4,
        nombre: 'Etiopia Yragacheff',
        precio: 9,
        imagen: 'assets/coffe 3.png'
    },
    {
        id:5,
        nombre: 'Kenia Ndunduri',
        precio: 9,
        imagen: 'assets/bolsakenia.png'
    },
    {
        id: 6,
        nombre: 'Etiopia Sidamo',
        precio: 9,
        imagen: 'assets/bolsaetiopiasidamo.png'
    },

];
let carritoArray = [];
let divvacio=document.querySelector('.divvacio');
let nuevoLocalStorage = window.localStorage;

function pintar(){
    datos.forEach((datosdelarray)=> {
        let div= document.createElement('div');
        let divbody = document.createElement('div');
        let titulo = docç.createElement('h4');
        titulo.textContent= datosdelarray.nombre;
        let imagendiv= document.createElement('img');
        imagendiv.setAttribute('src',datosdelarray.imagen);
        let precio = document.createElement('p');
        precio.textContent = `${datosdelarray.precio} €`;
        divbody.appendChild(imagendiv);
        divbody.appendChild(titulo);
        divbody.appendChild(precio);
        div.appendChild(divbody);
        divvacio.appendChild(div)
    });
}

function agregarProducto(e) {
    carritoArray.push(e.target.getAttribute('marcador'))
    pintar();
}

function guardarCarritoEnLocalStorage() {
    nuevoLocalStorage.setItem('carritoArray', JSON.stringify(carritoArray));
}
function cargarCarritoDeLocalStorage() {
    if (nuevoLocalStorage.getItem('carrito') !== null) {
        carritoArray = JSON.parse(nuevoLocalStorage.getItem('carritoArray'));
    }
}
pintar();

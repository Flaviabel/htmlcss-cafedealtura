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
            id: 5,
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
    let items = document.querySelector('.items');
    let carrito = document.querySelector('.carrito');
    let totalcarrito = document.querySelector('.total');
    let botonVaciar = document.querySelector('.boton-vaciar');
    let nuevoLocalStorage = window.localStorage;


    function pintarProducto() {
        datos.forEach((datosarray) => {
            let div1 = document.createElement('div');
            div1.classList.add('card');

            let div1body = document.createElement('div');
            div1body.classList.add('card-body');

            let div1title = document.createElement('h5');
            div1title.classList.add('card-title');
            div1title.textContent = datosarray.nombre;

            let divImagen = document.createElement('img');
            divImagen.classList.add('img-fluid');
            divImagen.setAttribute('src', datosarray.imagen);

            let divPrecio = document.createElement('p');
            divPrecio.classList.add('card-text');
            divPrecio.textContent = `${datosarray.precio} €`;

            let divBoton = document.createElement('button');
            divBoton.classList.add('btn', 'btn-primary');
            divBoton.textContent = 'Agregar';
            divBoton.setAttribute('marcador', datosarray.id);
            divBoton.addEventListener('click', agregarProducto);

            div1body.appendChild(divImagen);
            div1body.appendChild(div1title);
            div1body.appendChild(divPrecio);
            div1body.appendChild(divBoton);
            div1.appendChild(div1body);
            items.appendChild(div1);
        });
    }

    function agregarProducto(e) {
        carritoArray.push(e.target.getAttribute('marcador'))
        pintarCarrito();
        guardarCarritoEnLocalStorage();
    }


    function pintarCarrito() {
        carrito.textContent = '';

        let carritounico = [...new Set(carritoArray)];


        carritounico.forEach((parametroitem) => {
            let divItems = datos.filter((itemDatos) => {
                return itemDatos.id === parseInt(parametroitem);
            });


            let cantidadItems = carritoArray.reduce((total, itemId) => {
                return itemId === parametroitem ? total += 1 : total;
            }, 0);


            let nuevoLi = document.createElement('li');
            nuevoLi.classList.add('list-group-item', 'text-right', 'mx-2');
            nuevoLi.textContent = `${cantidadItems} x ${divItems[0].nombre} - ${divItems[0].precio} €`;


            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1px';

            miBoton.dataset.parametroitem = parametroitem;
            miBoton.addEventListener('click', borrarItemCarrito);
            nuevoLi.appendChild(miBoton);
            carrito.appendChild(nuevoLi);
        });

        totalcarrito.textContent = calcularTotal();

    }

    function borrarItemCarrito(evento) {
        let id = evento.target.dataset.parametroitem;
        carritoArray = carritoArray.filter((carritoId) => {
            return carritoId !== id;
        });
        pintarCarrito();
        guardarCarritoEnLocalStorage();
    }
    function vaciarCarrito() {
        carritoArray = [];
        pintarCarrito();
        localStorage.clear();
    }
    function calcularTotal() {
        return carritoArray.reduce((total, item) => {
            let nuevoItem = datos.filter((itemDatos) => {
                return itemDatos.id === parseInt(item);
            });
            return total + nuevoItem[0].precio;
        }, 0);
    }

    function guardarCarritoEnLocalStorage() {
        nuevoLocalStorage.setItem('carritoArray', JSON.stringify(carritoArray));
    }
    function cargarCarritoDeLocalStorage() {
        if (nuevoLocalStorage.getItem('carrito') !== null) {
            carritoArray = JSON.parse(nuevoLocalStorage.getItem('carritoArray'));
        }
    }

    botonVaciar.addEventListener('click', vaciarCarrito);
    cargarCarritoDeLocalStorage();
    pintarProducto();
    pintarCarrito();
});


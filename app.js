const productos = [
    { id: 1, nombre: "Alfombra Exterior", precio: 150, imagen: "imagenjs/alfombra exterior.png"},
    { id: 2, nombre: "Alfombra gris", precio: 1500, imagen: "imagenjs/alfombra gris.png" },
    { id: 3, nombre: "Alfombra Interior", precio: 1200, imagen: "imagenjs/alfombra interior.png" },
    { id: 4, nombre: "Calendario", precio: 450, imagen: "imagenjs/calendario.png"},
    { id: 5, nombre: "Cesto para Ropa", precio: 1000, imagen: "imagenjs/cesto ropa.png"},
    { id: 6, nombre: "Florero", precio: 200, imagen: "imagenjs/florero.png" },
    { id: 7, nombre: "Florero Azul", precio: 1000, imagen: "imagenjs/floreroazul.png" },
    { id: 8, nombre: "Juego de Baño", precio: 1400, imagen: "imagenjs/juedo bano.png" },
    { id: 9, nombre: "Juego de Cestos", precio: 850, imagen: "imagenjs/juedo de cesto.png"},
    { id: 10, nombre: "Juego de Velas", precio: 400, imagen: "imagenjs/juego de velas.png"},
    { id: 11, nombre: "Reloj Pared", precio: 500, imagen: "imagenjs/reloj.png" },
    { id: 12, nombre: "Vela Corazon", precio: 200, imagen: "imagenjs/vela corazon.png" },
    { id: 13, nombre: "Velas Torneadas", precio: 250, imagen: "imagenjs/velas torneadas.png" },
    { id: 14, nombre: "Velas Tunas", precio: 200, imagen: "imagenjs/velas tunas.png"},
    { id: 15, nombre: "Vinilo", precio: 200, imagen: "imagenjs/vinilo.png"}
];

let carrito = [];

function mostrarProductos() {
    const contenedorProductos = document.getElementById("contenedor-productos");
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(div);
    });
}

function guardarCarritoEnStorage() {
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
}

function cargarCarritoDesdeStorage() {
    const carritoGuardado = localStorage.getItem(`carrito`);
    if (carritoGuardado) {
        carrito= JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const productoEnCarrito = carrito.find(p => p.id ===id);
    if (productoEnCarrito){productoEnCarrito.cantidad++;
    } else { 
        carrito.push({...producto,cantidad:1});
    }
    actualizarCarrito();
    updateCartCount();
    guardarCarritoEnStorage();
    calcularTotal();
    
}

function actualizarCarrito() {
    const contenidoCarrito = document.getElementById("contenido-carrito");
    contenidoCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${producto.nombre} - $${producto.precio} x ${producto.cantidad}</p> ` ;
        contenidoCarrito.appendChild(div);
    });
}
function updateCartCount() {
    const cantidadCarrito = document.getElementById("cantidad-carrito");
    cantidadCarrito.innerText = carrito.reduce((total,producto) => total + producto.cantidad,0);
}

function inicializar () {
    cargarCarritoDesdeStorage();
    mostrarProductos();
}

function calcularTotal() {
    const total = carrito.reduce((total,producto) => total + (producto.precio * producto.cantidad), 0);
    const totalElemento = document.getElementById("total-carrito");
    totalElemento.innerText = `Total:$${total}`;
}

function finalizarCompra() {
    if (carrito.length === 0) {Swal.fire("Tu carrito esta vacio.");}
    return;
}

Swal.fire("Gracias por tu compra! Tu pedido ha sido confirmado.");
carrito = [];
actualizarCarrito();
calcularTotal();


mostrarProductos();
// CONSTANTES
// const nav = document.getElementById("navBar");
// const mostramosHamburguesas = document.getElementById("mostrarProductos");
// const carritoMostrarDom = document.getElementById("mostrarCarrito");
// const verCarrito = document.getElementById("botonVerCarrito"); /*Recordar boton creado en el NAV.*/
// const titulo = document.getElementById("tituloCarrito");
// const vaciar = document.getElementById("botonVaciarCarrito");
// const costoCompra = document.getElementById("costo");
// const finalizar = document.getElementById("botonFinalizarCompra"); /*Recordar boton creado en el NAV.*/

// ARRAYS
const arrayProductos = [hamburguesa1, hamburguesa2, hamburguesa3, hamburguesa4, hamburguesa5, hamburguesa6, hamburguesa7, hamburguesa8];

// ARRAY DE CARRITO VACIO
let carrito = [];

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"))
}

// CREAMOS NAV
const nav = document.getElementById("navBar");
const navBar = document.createElement("div");
navBar.classList.add("container-fluid");
navBar.innerHTML = `
    <a href="index.html"><img class="logoResto" src="img/logo2.png"></a>
        <button class="navbar-toggler" type="button"></button>
        <ul class="navbar-nav">
            <li class="nav-item">
          <button class="buttonNav" id = "botonVerCarrito">Ver carrito
          </button>
          <button class="buttonNav" id = "botonVaciarCarrito">Vaciar carrito
          </button>
          <button class="buttonNav" id = "botonFinalizarCompra">Finalizar compra
          </button>
          <button class="buttonNav" id = "botonModo">Modo claro/oscuro
          </button>
        </li>
      </ul>
      `
nav.appendChild(navBar);

// FUNCION PARA VER PRODUCTOS Y BOTON QUE INVOCA FUNCION PARA AGREGAR PRODUCTOS.
const mostramosHamburguesas = document.getElementById("mostrarProductos"); 
const verProductos = () => {
  arrayProductos.forEach(producto => {
    const cardBs = document.createElement("div");
    cardBs.classList.add("col-xl-3", "col-md-6");
    cardBs.innerHTML =
      `<div class="card cardProductos">
        <img src= ${producto.img} alt= ${producto.nombre}>
        <div class="card-body">
        <h2 class="card-title">${producto.nombre}</h2>
        <p class="card-text">${producto.descripcion} </p>
        <p class="card-text">$ ${producto.precio} </p></div>
        <button class="btn btn-dark buttonCard" id = "boton${producto.id}">Añadir al Carrito</button>
        </div>`

    mostramosHamburguesas.appendChild(cardBs);

    // EVENTO PARA AGREGAR PRODUCTOS EN EL CARRITO - LA FUNCION LA CREAMOS POR FUERA PERO ENTRA POR PARAMETRO EL PRODUCTO ID Y EL BOTON ESTA CREADO DENTRO DE ESTA FUNCION
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      agregar(producto.id);
    })
  })
};

// INVOCAMOS FUNCION PARA MOSTRAR PROCUTOS EN EL DOM
verProductos();

// FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO. SE INVOCA DENTRO DE FUNCION DONDE CREAMOS BOTON Y PRODUCTOS
const agregar = (id) => {
  const enCarrito = carrito.find(producto => producto.id === id);
  if (enCarrito) {
    enCarrito.cantidad++;
    costo();
  } else {
    const producto = arrayProductos.find(producto => producto.id === id);
    carrito.push(producto);
    costo();
  }
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

// EVENTO PARA MOSTRAR PRODUCTOS AGREGADOS EN EL CARRITO - INVOCAMOS FUNCIONES CREADAS POR FUERA VEMOS CARRITO Y EL COSTO
const verCarrito = document.getElementById("botonVerCarrito");
verCarrito.addEventListener("click", () => {
  vemosCarrito();
  costo();
})

// FUNCION PARA CREAR EL TITULO DEL CARRITO
const titulo = document.getElementById("tituloCarrito");
const etiquetaTitulo = document.createElement("div");
etiquetaTitulo.innerHTML = `<div class="divTitulo"><p class="tituloCarrito">Carrito de Compras</p></div>`
titulo.appendChild(etiquetaTitulo);


// FUNCION PARA VER CARRITO - LA INVOCAMOS EN EL EVENTO VER CARRITO. 
const carritoMostrarDom = document.getElementById("mostrarCarrito");
const vemosCarrito = () => {
  carritoMostrarDom.innerHTML = [];
  carrito.forEach(producto => {
    const cardBs = document.createElement("div");
    cardBs.classList.add("col-xl-3", "col-md-6");
    cardBs.innerHTML =
      ` 
          <div class="card cardProductos">
          <img src= ${producto.img} alt= ${producto.nombre}>
          <div class="card-body">
          <h2 class="card-title">${producto.nombre}</h2>
          <p> Cantidad: ${producto.cantidad} </p>
          <button class="btn-dark botonResSum" id ="botonSuma${producto.id}">+</button>
          </div> 
          <button class="btn-dark botonResySum" id ="botonResta${producto.id}">-</button>
          </div>
          <p class="card-text">$ ${producto.precio}</p></div>
          <button class="btn btn-dark" id ="botonEliminar${producto.id}">eliminar del carrito</button>` //AGREGUE BOTON PARA SUMAR Y RESTAR; 

    carritoMostrarDom.appendChild(cardBs)

    // EVENTO PARA ELIMINAR PRODUCTOS DEL CARRITO - INVOCAMOS LA FUNCION ELIMINAR CARRITO Y PASAMOS EL PARAMETRO PRODUCTO ID PORQUE EL BOTON LO CREAMOS DENTRO DE ESTA FUNCION
    const botonEliminar = document.getElementById(`botonEliminar${producto.id}`);
    botonEliminar.addEventListener("click", () => {
      eliminamosProducto(producto.id);
    })

    // EVENTO PARA SUMAR O RESTAR UN PRODUCTO

    const botonSuma = document.getElementById(`botonSuma${producto.id}`);
    botonSuma.addEventListener("click", () => {
      sumaProducto(producto.id);
    })

    const botonResta = document.getElementById(`botonResta${producto.id}`);
    botonResta.addEventListener("click", () => {
      restaProducto(producto.id);
    })


  })
}



// FUNCION PARA ELIMINAR UN PRODUCTO Y FUNCION PARA AGREGAR UN PRODUCTO 
const sumaProducto = (id) => {
  const sumaCarrito = carrito.find(producto => producto.id === id);
  if (sumaCarrito) {
    sumaCarrito.cantidad++;
    costo()
 }
}

const restaProducto = (id) => {
  const restaCarrito = carrito.find(producto => producto.id === id);
  if (restaCarrito) {
  //const indice = carrito.indexOf(restaCarrito);
  //carrito.splice(indice, 1);
  restaCarrito.cantidad--
  costo()
 }
}


// FUNCION PARA ELIMINAR PRODUCTO DEL CARRITO
const eliminamosProducto = (id) => {
  const productoEliminado = carrito.find(producto => producto.id === id);
  const indice = carrito.indexOf(productoEliminado);
  carrito.splice(indice, 1);
  vemosCarrito();
  costo()

  localStorage.setItem("carrito", JSON.stringify(carrito))
}

// EVENTO PARA VACIAR EL CARRITO - INCOVAMOS FUNCION CREADA POR FUERA. 
const vaciar = document.getElementById("botonVaciarCarrito");
vaciar.addEventListener("click", () => {
  eliminamosTodo()
});

// FUNCION PARA VACIAR CARRITO - PRIMERO PASAMOS EL ARRAY DEL CARRITO VACIO - LUEGO INVOCAMOS FUNCION VER CARRITO PARA QUE ME LO MUESTRE COMPLETO Y EL COSTO
const eliminamosTodo = () => {
  carrito = [];
  vemosCarrito();
  costo();

  localStorage.clear();
}

// FUNCION PARA VER EL COSTO DE LA COMPRA - LA INVOCAMOS CUANDO VACIAMOS O AGREGAMOS PRODUCTOS AL CARRITO. 
const costoCompra = document.getElementById("costo");
const costo = () => {
  let total = carrito.reduce((acumulador, producto) => acumulador + (producto.cantidad * producto.precio), 0);
  console.log(total);
  costoCompra.innerHTML = `<p class="compra">Total de la compra: $${total}</p>`;
}

// FINALIZAR COMPRA

// EVENTO PARA FUNALIZAR COMPRA Y MOSTRAR MENSAJE
const finalizar = document.getElementById("botonFinalizarCompra"); /*Recordar boton creado en el NAV.*/
finalizar.addEventListener("click", () => {
  // MENSAJE FORM
  const mensajeForm = document.getElementById("mensajeFinalizar")
  console.log(mensajeForm);
  // const carritoConProductos = carrito.find(producto => producto.id === id);
  if (carrito.length > 0) {
    mensajeForm.innerHTML = `<p>Muchas gracias su pedido está en camino</p>`;
    carritoMostrarDom.appendChild(mensajeForm);

    setTimeout(() => {
      mensajeForm.innerHTML = '';
    }, 3000);

  } else {
    mensajeForm.innerHTML = `<p>No hay elementos en el carrito</p>`;
    carritoMostrarDom.appendChild(mensajeForm);
  
    setTimeout(() => {
      mensajeForm.innerHTML = '';
    }, 3000);
  }
})



// NO USAR*****************************************************

// FINALIZAR COMPRA
// const finalizar = document.getElementById("botonFinalizarCompra"); /*Recordar boton creado en el NAV.*/

// CONST PRUEBA MENSAJE FINAL
// const mensajeFinal = document.getElementById("mensajeFinal")

// finalizar.addEventListener("click", () => {
//   vemosCarrito();
//   const formFinalizar = document.createElement("div");
//   formFinalizar.innerHTML = `<form class="mb-3 contenedorForm formFianlizar" id= "formEnviar">
//       <label for="exampleInputEmail1" class="labelForm">Ingrese su nombre</label>
//       <input id = "inputNombre" type="text" class="form-control textInput" id="exampleInputEmail1" aria-describedby="emailHelp">
//       <label for="exampleInputEmail1" class="labelForm">Email</label>
//       <input id = "inputMail" type="email" class="form-control textInput" id="exampleInputEmail1" aria-describedby="emailHelp">
//       <label for="exampleInput" class="labelForm">Ingrese dirección para enviar pedido.</label>
//       <input id = "inputDir" type="text" class="form-control textInput" id="exampleInputEmail1" aria-describedby="emailHelp">
//       <p>El pago se realiza cuando el pedido se entrega</p>
//       <button class="btn btn-warning">Enviar</button>
//       <button id = "botonSalir" class="btn btn-warning">Salir</button>
//     `;
//   carritoMostrarDom.appendChild(formFinalizar);

// FUNCION Y BOTON PARA SALIR
// const botonSalir = document.getElementById("botonSalir");
// console.log(botonSalir);
// botonSalir.addEventListener("click", () => {
//   eliminamosTodo();
// })

//  BOTON ENVIAR
// const inputNombre = document.getElementById("inputNombre");
// console.log(inputNombre);
// const inputMail = document.getElementById("inputMail");
// console.log(inputMail);
// const inputDir = document.getElementById("inputDir");
// console.log(inputDir);

// MENSAJE FORM
// const mensajeForm = document.getElementById("mensajeFinalizar")
// console.log(mensajeForm);
// carritoMostrarDom.appendChild(mensajeForm)


// const botonEnviar = document.getElementById("formEnviar");
// console.log(botonEnviar);
//   botonEnviar.addEventListener("submit", (e) => {
//     e.preventDefault()
//     if (inputNombre.value == "" || inputMail.value == "" || inputDir.value == "") {
//       mensajeForm.innerHTML = `<h3>No ingreso datos para envio</h3>`
//       setTimeout(() => {
//         mensajeForm.innerHTML = '';
//       }, 3000);
//     } else {
//       mensajeForm.innerHTML = `<h3>Muchas gracias su pedido está en camino</h3>` 
//       setTimeout(() => {
//         mensajeForm.innerHTML = '';
//       }, 3000);
//     }
//   });
// });

// BOTON MODO /*Recordar boton creado en el NAV.*/
const botonModo = document.getElementById("botonModo");

botonModo.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
  if (document.body.classList.contains("oscuro")) {
    localStorage.setItem("botonModo", "oscuro");
  } else {
    localStorage.setItem("botonModo", "claro")
  }
})

const modoClaroOscuro = localStorage.getItem("botonModo")

if (modoClaroOscuro === "oscuro") {
  document.body.classList.add("oscuro")
} else {
  document.body.classList.remove("oscuro");
}















const COSTOENVIO = 1100

class Producto {
    constructor(nombre, id, precio) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
}





const PRODUCTOS = []

PRODUCTOS.push(new Producto("RX 6600XT", 148, 85000))
PRODUCTOS.push(new Producto("GTX 1050TI", 149, 50000 ))
PRODUCTOS.push(new Producto("RTX 2060", 150, 99000))
PRODUCTOS.push(new Producto("i3 10100", 151, 25000))
PRODUCTOS.push(new Producto("Ryzen 5 3600", 152, 35000))
PRODUCTOS.push(new Producto("Ryzen 7 5800X", 153, 65000))

let contenedorJs = document.getElementById("contenedorJs")


for (const producto of PRODUCTOS) {
    let columna = document.createElement("div")
    columna.className = "col-md-4 mt-3"
    columna.id = `columna-${producto.id}`
    columna.innerHTML = `
    <button id="boton${producto.id}">
        <div class="card"> 
            <div class="card-body> 
            <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
            <p class="card-text">ID: <b>${producto.id}</b></p>
            </div>
        </div>
    </button>
        `
        contenedorJs.append(columna)
}





let boton148 = document.getElementById("boton148")
boton148.onclick = () => {
    let precioProducto = 85000
    let divPrecios = document.createElement("div")
    divPrecios.className = "col-md-4 mt-3"
    divPrecios.id = `divPrecios148`
    divPrecios.innerHTML = `
    <div>
        <h4>Precio Efectivo/Transferencia: ${precioProducto}</h4>
        <h4>Precio Tarjeta/Ahora12: ${precioProducto * 1.20}</h4>

    </div>
    `
    contenedorJs.append(divPrecios)

}


let boton149 = document.getElementById("boton149")
boton149.onclick = () => {
    let precioProducto = 50000
    let divPrecios = document.createElement("div")
    divPrecios.className = "col-md-4 mt-3"
    divPrecios.id = `divPrecios149`
    divPrecios.innerHTML = `
    <div>
        <h4>Precio Efectivo/Transferencia: ${precioProducto}</h4>
        <h4>Precio Tarjeta/Ahora12: ${precioProducto * 1.20}</h4>

    </div>
    `
    contenedorJs.append(divPrecios)

}



let boton150 = document.getElementById("boton150")
boton150.onclick = () => {
    let precioProducto = 99000
    let divPrecios = document.createElement("div")
    divPrecios.className = "col-md-4 mt-3"
    divPrecios.id = `divPrecios150`
    divPrecios.innerHTML = `
    <div>
        <h4>Precio Efectivo/Transferencia: ${precioProducto}</h4>
        <h4>Precio Tarjeta/Ahora12: ${precioProducto * 1.20}</h4>

    </div>
    `
    contenedorJs.append(divPrecios)

}

let boton151 = document.getElementById("boton151")
boton151.onclick = () => {
    let precioProducto = 25000
    let divPrecios = document.createElement("div")
    divPrecios.className = "col-md-4 mt-3"
    divPrecios.id = `divPrecios151`
    divPrecios.innerHTML = `
    <div>
        <h4>Precio Efectivo/Transferencia: ${precioProducto}</h4>
        <h4>Precio Tarjeta/Ahora12: ${precioProducto * 1.20}</h4>

    </div>
    `
    contenedorJs.append(divPrecios)

}

let boton152 = document.getElementById("boton152")
boton152.onclick = () => {
    let precioProducto = 35000
    let divPrecios = document.createElement("div")
    divPrecios.className = "col-md-4 mt-3"
    divPrecios.id = `divPrecios152`
    divPrecios.innerHTML = `
    <div>
        <h4>Precio Efectivo/Transferencia: ${precioProducto}</h4>
        <h4>Precio Tarjeta/Ahora12: ${precioProducto * 1.20}</h4>

    </div>
    `
    contenedorJs.append(divPrecios)

}


let boton153 = document.getElementById("boton153")
boton153.onclick = () => {
    let precioProducto = 65000
    let divPrecios = document.createElement("div")
    divPrecios.className = "col-md-4 mt-3"
    divPrecios.id = `divPrecios153`
    divPrecios.innerHTML = `
    <div>
        <h4>Precio Efectivo/Transferencia: ${precioProducto}</h4>
        <h4>Precio Tarjeta/Ahora12: ${precioProducto * 1.20}</h4>
    </div>
    `
    contenedorJs.append(divPrecios)

}





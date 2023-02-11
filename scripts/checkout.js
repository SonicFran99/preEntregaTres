//DOM
let checkoutCart = document.getElementById("checkoutCart")
let quantity = document.getElementById("itemQuantity")
let total = document.getElementById("total")

//RECUPERANDO EL CARRITO DEL STORAGE
let productosEnCarrito
if(localStorage.getItem("carrito")) {
  productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
  itemizedCart(productosEnCarrito)
}else{
  productosEnCarrito = []
  localStorage.setItem("carrito", productosEnCarrito)
}

//SETEAR EL TEXTO A LA CANTIDAD TOTAL DE ITEMS
quantity.innerText = `${productosEnCarrito.length}`
calcularTotal(productosEnCarrito)

//FUNCION PARA IMPRIMIR EL STORAGE A LA LISTA
function itemizedCart (array) {
  for (let curso of array) {
    let newCurso = document.createElement("li")
    newCurso.className = "list-group-item d-flex justify-content-between lh-sm"
    newCurso.innerHTML = 
    `<div>
      <h6 class="my-0">${curso.id}</h6>
      <small class="text-muted">${curso.duration}</small>
    </div>
    <span class="text-muted">€${curso.price}</span>`
    checkoutCart.appendChild(newCurso)
  }
}

//CALCULAR TOTAL
function calcularTotal (array) {
  if(array.length == 1) {
    total.innerHTML = `
    <span>Total (USD)</span>
    <strong>€${array[0].price}</strong>`
  } else {
    console.log(productosEnCarrito)
    let sum = array.reduce((acc, item) => acc + item.price, 0)
    console.log(sum)
    total.innerHTML = `
    <span>Total (USD)</span>
    <strong>€${sum}</strong>`
  }
}
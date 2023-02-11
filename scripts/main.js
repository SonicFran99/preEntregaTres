//INICIALIZACIÓN CARRITO:
let productosEnCarrito

//SETEAR CARRITO AL STORAGE
if(localStorage.getItem("carrito")) {
  productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
  initCartHTML(productosEnCarrito)
}else{
  productosEnCarrito = []
  localStorage.setItem("carrito", productosEnCarrito)
}

console.log(productosEnCarrito)

//INICIALIZACIÓN MAIN:
searchHeader.innerText = ""

printInd(cursos)
printSp(cursos)
printCh(cursos)

//BUSCADOR
searchBar.addEventListener("input", () => {
  search(searchBar.value, cursos)
})
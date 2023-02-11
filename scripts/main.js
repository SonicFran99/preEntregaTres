//INICIALIZACIÓN MAIN:
searchHeader.innerText = ""

printInd(cursos)
printSp(cursos)
printCh(cursos)

//BUSCADOR
searchBar.addEventListener("input", () => {
  search(searchBar.value, cursos)
})
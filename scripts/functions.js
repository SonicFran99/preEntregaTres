//FUNCIONES:

//IMPRIMIR CURSOS:
function printInd (array) {
  array.forEach((curso) => {
    if (curso.clase.includes("ind")) {
      let newCoursesInd = document.createElement("div")
      newCoursesInd.className = "col"
      newCoursesInd.innerHTML = 
      `<div id="${curso.id}" class="card">
        <div class="card-body d-flex flex-column align-items-center">
          <p class="card-text">${curso.id}</p>
          <h2 class="card-title">${curso.duration}</h2>
          <h1 class="card-text display-1">€${curso.price}</h1>
          <button type="button" class="btn btn-outline-primary" id="addCart${curso.clase}">Add to cart</button>
        </div>
      </div>`
      coursesInd.appendChild(newCoursesInd)
      
      //AGREGAR AL CARRITO
      let agregarBtn = document.getElementById(`addCart${curso.clase}`)
      agregarBtn.addEventListener("click", () => {
        addCart(curso)
      })
    }
  });
}

function printSp (array) {
  array.forEach(curso => {
    if (curso.clase.includes("sp")) {
      let newCoursesSp = document.createElement("div")
      newCoursesSp.className = "col"
      newCoursesSp.innerHTML = 
      `<div id="${curso.id}" class="card">
        <div class="card-body d-flex flex-column align-items-center">
          <p class="card-text">${curso.id}</p>
          <h2 class="card-title">${curso.duration}</h2>
          <h1 class="card-text display-1">€${curso.price}</h1>
          <button type="button" class="btn btn-outline-primary" id="addCart${curso.clase}">Add to cart</button>
        </div>
      </div>`
      coursesSp.appendChild(newCoursesSp)

      //AGREGAR AL CARRITO
      let agregarBtn = document.getElementById(`addCart${curso.clase}`)
      agregarBtn.addEventListener("click", () => {
        addCart(curso)
      })
    }
  });
}

function printCh (array) {
  array.forEach(curso => {
    if (curso.clase.includes("ch")) {
      let newCoursesCh = document.createElement("div")
      newCoursesCh.className = "col"
      newCoursesCh.innerHTML = 
      `<div id="${curso.id}" class="card">
        <div class="card-body d-flex flex-column align-items-center">
          <p class="card-text">${curso.id}</p>
          <h2 class="card-title">${curso.duration}</h2>
          <h1 class="card-text display-1">€${curso.price}</h1>
          <button type="button" class="btn btn-outline-primary" id="addCart${curso.clase}">Add to cart</button>
        </div>
      </div>`
      coursesCh.appendChild(newCoursesCh)

      //AGREGAR AL CARRITO
      let agregarBtn = document.getElementById(`addCart${curso.clase}`)
      agregarBtn.addEventListener("click", () => {
        addCart(curso)
      })
    }
  });
}


//BUSCADOR:
function coincidencias (array) {
  coincidencia.innerHTML = ""
  
  for (let curso of array) {
    let newCoincidencia = document.createElement("div")
    newCoincidencia.className = "card p-3 m-3"
    newCoincidencia.id = `${curso.id}`
    newCoincidencia.innerHTML = 
    `<div class="card-body d-flex flex-column align-items-center p-3">
    <p class="card-text">${curso.id}</p>
    <h2 class="card-title">${curso.duration}</h2>
    <h1 class="card-text display-1">€${curso.price}</h1>
    <button type="button" class="btn btn-outline-primary" id="addCart${curso.clase}">Add to cart</button>
    </div>`
    coincidencia.appendChild(newCoincidencia)
    
    //AGREGAR AL CARRITO
    let agregarBtn = document.getElementById(`addCart${curso.clase}`)
    agregarBtn.addEventListener("click", () => {
      addCart(curso)
    })
  }
}

function search (cursoBuscado, array) {
  let busqueda = array.filter(
    curso => curso.id.toLowerCase().includes(cursoBuscado.toLowerCase()) || curso.duration.toLowerCase().includes(cursoBuscado.toLowerCase()) || curso.clase.toLowerCase().includes(cursoBuscado.toLowerCase())
    )
    if (busqueda.length == 0) {
      coincidencia.innerHTML = `<h1 class="text-center display-5 m-auto">This product is not in our list</h1>`
    } else if (cursoBuscado === "") {
      coincidencia.innerHTML = ""
      searchHeader.innerText = ""
    } else {
      coincidencia.innerHTML = ""
      searchHeader.innerText = "Search Results:"
      coincidencias(busqueda)
    }
  }
  
  //AÑADIR AL CARRITO:
  function addCart (curso) {
    productosEnCarrito.push(curso)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    cartHTML(productosEnCarrito)
  }
  
  //IMPRIMIR AL CARRITO:

  //DESDE EL STORAGE:  (no encontré la forma de reutilizar la funcion cartHTML(), por lo que modifique una sola linea para lograr imprimir correctamente lo que ya esta en el storage)
  function initCartHTML (array) {
    for (let curso of array) {
      let newCurso = document.createElement("ul") // <-- linea modificada
      newCurso.className = "nav nav-tabs d-flex justify-content-between flex-nowrap"
      newCurso.innerHTML = 
      `<li class="nav-item m-2">${curso.id}</li> 
      <li class="nav-item m-2">${curso.duration}</li>
      <li class="nav-item m-2">€${curso.price}</li>`
      cartList.appendChild(newCurso)
    }
  }

  //AÑADIENDO
  function cartHTML (array) {
    let newCurso = document.createElement("ul")
    for (let curso of array) {
      newCurso.className = "nav nav-tabs d-flex justify-content-between flex-nowrap"
      newCurso.innerHTML = 
      `<li class="nav-item m-2">${curso.id}</li> 
      <li class="nav-item m-2">${curso.duration}</li>
      <li class="nav-item m-2">€${curso.price}</li>`
      cartList.appendChild(newCurso)
    }
  }
  
//BORRAR CARRITO / RESETAR STORAGE:
deleteCart.addEventListener("click", () => {
  productosEnCarrito = []
  localStorage.removeItem("carrito")
  cartList.innerHTML = ""
})

//CREAR ESTUDIANTE DESDE EL FORM:

submitBtn.addEventListener("click", () => {
  const nuevoAlumno = new Student (firstName.value, lastName.value, city.value, info.value)
  alumnos.push(nuevoAlumno)
  localStorage.setItem("alumnos", JSON.stringify(alumnos))
  console.log(alumnos)
})
//DOM:
let searchBar = document.querySelector("#searchBar")
let cartList = document.getElementById("cartList")
let addToCart = document.querySelector("#addCart")
let coursesInd = document.getElementById("coursesInd")
let coursesSp = document.getElementById("coursesSp")
let coursesCh = document.getElementById("coursesCh")
let searchHeader = document.getElementById("searchTitle")
let coincidencia = document.getElementById("coincidencia")
let deleteCart = document.getElementById("delete")
let checkoutCart = document.getElementById("checkoutCart")

//FORM
let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let city = document.getElementById("city")
let info = document.getElementById("floatingTextarea")
let submitBtn = document.getElementById("createStudent")

//CLASES DE OBJETOS:
class Individual {
  constructor (clase, id, duration, price) {
    this.clase = clase,
    this.id = id,
    this.duration = duration,
    this.price = price
  }
}

class Special {
  constructor (clase, id, duration, price) {
    this.clase = clase,
    this.id = id,
    this.duration = duration,
    this.price = price
  }
}

class Coaching {
  constructor(clase, id, duration, price) {
    this.clase = clase,
    this.id = id,
    this.duration = duration,
    this.price = price
  }
}

class Student {
  constructor(pNombre, sNombre, ciudad, sobreMi) {
    this.pNombre = pNombre,
    this.sNombre = sNombre,
    this.ciudad = ciudad,
    this.sobreMi = sobreMi
  }
}

//INSTANCIACIÓN:

const silver = new Individual("individual1", "silver", "1 class", 14)

const goldInd = new Individual("individual2", "gold", "4 classes", 56)

const platinumInd = new Individual("individual3", "platinum", "10 classes", 140)

const goldSp = new Special("special1", "gold", "1 month", 112)

const platinumSp = new Special("special2", "platinum", "3 months", 336)

const coachOrg = new Coaching("coaching1", "organizational", "1 month", 100)

const coachLead = new Coaching("coaching2", "leadership", "1 month", 115)

const coachOnt = new Coaching("coaching3", "onthological", "1 month", 130)

//CURSOS: 
let cursos = []

//SETEAR CURSOS EN EL STORAGE:
if(localStorage.getItem("cursos")){
    cursos = JSON.parse(localStorage.getItem("cursos"))
} else {
    cursos.push(silver, goldInd, platinumInd, goldSp, platinumSp, coachOrg, coachLead, coachOnt)
    localStorage.setItem("cursos", JSON.stringify(cursos))
}

console.log(cursos)

//ALUMNOS:
let alumnos = []

//SETEAR ALUMNOS EN EL STORAGE:
if(localStorage.getItem("alumnos")){
  alumnos = JSON.parse(localStorage.getItem("alumnos"))
}
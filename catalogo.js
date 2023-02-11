var imggin = document.createElement('img');
imggin.src = "gin.jpg";
imggin.style.width = "200px";
imggin.style.height = "300px";

var imgAperol = document.createElement('img');
imgAperol.src = "Aperol.jpg";
imgAperol.style.width = "200px";
imgAperol.style.height = "300px";

var imgcynar = document.createElement('img');
imgcynar.src = "cynar.jpg";
imgcynar.style.width = "200px";
imgcynar.style.height = "300px";

var imgfernet = document.createElement('img');
imgfernet.src = "Fernet.jpg";
imgfernet.style.width = "200px";
imgfernet.style.height = "300px";

const todasLasBebidas = [
    {nombre: 'Gin', precio: "2500"},
    {nombre: 'Fernet', precio: "1900"},
    {nombre: 'Aperol', precio: "1700"},
    {nombre: 'Cynar', precio: "1500"},
    {nombre: 'Gancia', precio: "900"},
]

let input1  = document.getElementById("nombre");
input1.addEventListener("input", buscarBebidaPorNombre)
function buscarBebidaPorNombre(){
    let resultado = todasLasBebidas.find((el) => el.nombre.toLowerCase() == input1.value.toLowerCase())
    if(resultado == undefined){
    let sinstock = document.createElement('p');
    sinstock.innerText = (JSON.stringify(`${input1.value} + no se encuentra en nuestro stock`))
    document.body.append(sinstock)
    }else{
let existencias = document.createElement ('p');
existencias.innerHTML = (JSON.stringify(resultado))
document.body.append(existencias)
if (resultado.nombre == "Gin") {
    document.body.appendChild(imggin)
} 
if (resultado.nombre == "Aperol") {
    document.body.appendChild(imgAperol)
} 
if (resultado.nombre == "Cynar") {
    document.body.appendChild(imgcynar)
} 
if (resultado.nombre == "Fernet") {
    document.body.appendChild(imgfernet)
} 
}}

let borrarBusqueda = document.getElementById("limpiar")
borrarBusqueda.addEventListener("click", limpiarBusqueda)
function limpiarBusqueda (){
    existencias.remove()
}
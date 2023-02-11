let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
function validarFormulario(e){
e.preventDefault();
let formulario = e.target
sessionStorage.setItem('nombre', formulario.children[0].value); 
sessionStorage.setItem('apellido', formulario.children[1].value);
sessionStorage.setItem('telefono', formulario.children[2].value); 
sessionStorage.setItem('bebida pedida', formulario.children[3].value); 
const nombre = sessionStorage.getItem('nombre');
const apellido = sessionStorage.getItem('apellido');
const telefono = sessionStorage.getItem('telefono');
const bebidaPedida = sessionStorage.getItem('bebida pedida');
let parrafo = document.createElement('div');
parrafo.innerText = 'Gracias por tu pedido ' + nombre + " " + apellido + "." + " " + "Cuando tengamos existencias de " + bebidaPedida + " nos comunicaremos al " + telefono + "."
document.body.append(parrafo);
}
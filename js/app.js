

document.getElementById("btnIngresar").addEventListener("click", add);
function add(){
	var remover = document.getElementById("btnIngresar"); 
remover.style.display = 'none';
    var aparecer = document.getElementById("Tabla1"); 
aparecer.style.display = 'inline-block';


}
document.getElementById("btnSave").addEventListener("click", tablero);
function tablero(){
	var mensaje = document.getElementById("nombrelista").value;

	document.getElementById("nombrelista").value = "";
	var list = document.getElementById("list");
   

    var nodo = document.createTextNode(mensaje);
    var parrafo = document.createElement("p");
    var contenedor = document.createElement("div");
    parrafo.appendChild(nodo);
    contenedor.appendChild(parrafo);
    list.appendChild(contenedor);

}
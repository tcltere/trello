var mostrarLista = document.getElementById("list");


mostrarLista.addEventListener("click", function(){

	document.getElementById("lista").classList.add("after");
	document.getElementById("buttons").classList.remove("lista");
});


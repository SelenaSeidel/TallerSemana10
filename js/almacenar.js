document.addEventListener("DOMContentLoaded", function () {

const buttonAdd = document.getElementById("agregar");
const buttonLimpiar = document.getElementById("limpiar");
let contenedor=document.getElementById("contenedor");

/*cuando se carga la pagina debe cargar la lista */  
let arreglostring=localStorage.getItem("listado");
let arreglo = [];

/*chequear si ya existe el listado en el localStorage*/
if (arreglostring !== null && arreglostring !== "") {
    arreglo = JSON.parse(arreglostring);
}

/*mostrar*/
for (let i = 0; i < arreglo.length; i++) {
    let elemento=arreglo[i];
    if (i!=0){
    contenedor.innerHTML+="<li>"+elemento+"</li>";
    }else{
        contenedor.innerHTML="<li>"+elemento+"</li>";
    }
}

/*funcionalidad boton*/
buttonAdd.addEventListener("click", function () {
    let arreglostring = localStorage.getItem("listado");
    let arreglo = [];

    if (arreglostring !== null && arreglostring !== "") {
      arreglo = JSON.parse(arreglostring);

    }
    /*agregar a localstorage*/
    arreglo.push(document.getElementById("item").value);
    localStorage.setItem("listado",JSON.stringify(arreglo)); 
    //*volver a cargar el contenedor
    for (let i = 0; i < arreglo.length; i++) {
        let elemento=arreglo[i];
        if (i!=0){
        contenedor.innerHTML+="<li>"+elemento+"</li>";
        }else{
            contenedor.innerHTML="<li>"+elemento+"</li>";
        }
    }
    /*vaciar campo de input*/
    document.getElementById("item").value=""; 
});

/*funcionalidad boton limpiar*/
buttonLimpiar.addEventListener("click", function () {
    let arreglostring = localStorage.getItem("listado");
    /*borrar del localstorage */
    if (arreglostring !== null) {
      localStorage.removeItem("listado");
    }
    /*mostrar vacio*/
    contenedor.innerHTML="";
});

});


   



 window.onload = async function(){
     try {
        const response = await fetch("api.php");
        const datos = await response.json(); 
        for(var i = datos.length-1;i>=0;i--){

            contenedor = document.querySelector("section")
            contenedor.innerHTML += ''+
                '<article>'+
                    '<img src="imagenes/'+datos[i]['imagen']+'">'+
                    '<h3>'+datos[i]['titulo']+'</h3>'+
                    '<p>'+datos[i]['autor']+'</p>'+
                    '<time datetime="'+datos[i]['fecha']+'">'+datos[i]['fecha']+'</time>'+
                    '<p>'+datos[i]['texto']+'</p>'+
                    '<div class="clearfix"></div>'+
                '</article>'
        }
      } catch (error) {
        console.error("Error:", error);
      }
    const parametrosURL = new URLSearchParams(window.location.search);
    if(parametrosURL.get('admin') != undefined){
        console.log("eres admin")
        document.querySelector("#nuevaentrada").style.display = "block"
        document.querySelector("button").addEventListener("click",function(){
            console.log("voy a enviar un nuevo artículo")
           
            var datosFormulario = new FormData();

            const inputimagen = document.getElementById('imagen');
            const imagenseleccionada = inputimagen.files[0];

            datosFormulario.append('archivo', imagenseleccionada);

            datosFormulario.append('titulo', document.getElementById("titulo").value);
            datosFormulario.append('texto', document.getElementById("texto").value);
            datosFormulario.append('autor', document.getElementById("autor").value);

            fetch("escribe.php",{
                method: 'POST',
                body: datosFormulario
              }).then(function(){
                window.location = "./"
            })
              
        });
         
    
    } 

}






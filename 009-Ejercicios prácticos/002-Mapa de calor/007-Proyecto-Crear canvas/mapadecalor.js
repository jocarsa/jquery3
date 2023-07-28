$(document).ready(function(){
    const parametrosURL = new URLSearchParams(window.location.search);
    if(parametrosURL.get('admin') == undefined){
        let posiciones = []
        let contador = 0;
        $(document).mousemove(function(e){
            contador++;
            posiciones.push({"x":e.pageX,"y":e.pageY})

            if(contador %100 == 0){
                console.log(posiciones)
                $.ajax({
                    type: "POST",
                    data: "posiciones=" + JSON.stringify(posiciones),
                    url: "guarda.php"
                });
                posiciones = []
            }
        })
    }else{
        console.log("te voy a mostrar el mapa de calor")
        lienzo = document.createElement("canvas");
        document.body.appendChild(lienzo);
        contexto = lienzo.getContext("2d")
        lienzo.height = window.innerHeight
        lienzo.width = window.innerWidth
        contexto.fillRect(2,2,20,20)
    }
})
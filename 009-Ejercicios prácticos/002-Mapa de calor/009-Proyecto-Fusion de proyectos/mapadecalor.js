$(document).ready(function(){
    const parametrosURL = new URLSearchParams(window.location.search);
    if(parametrosURL.get('admin') == undefined){
        let posiciones = []
        let contador = 0;
        $(document).mousemove(function(e){
            contador++;
            posiciones.push({"x":e.pageX,"y":e.pageY})

            if(contador %1500 == 0){
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
        lienzo.style.position = "absolute"
        lienzo.style.top = 0
        lienzo.style.left = 0
        $.ajax({
            url: "mapa.csv",
            success: function(data){
                var json = JSON.parse(data)
                console.log(json)
                contexto.fillStyle = "rgba(255,0,0,0.1)"
                for(var i = 0;i<json.length;i++){
                    contexto.fillRect(json[i]['x'],json[i]['y'],20,20)
                }
                
            }
          });
    }
})
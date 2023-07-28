$(document).ready(function(){
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
})
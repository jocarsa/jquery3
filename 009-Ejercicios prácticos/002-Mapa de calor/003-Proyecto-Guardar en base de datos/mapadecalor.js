$(document).ready(function(){
    $(document).mousemove(function(e){
        console.log(e.pageX+","+e.pageY)
        $.ajax({
            url: "guarda.php?posx="+e.pageX+"&posy="+e.pageY
        });
    })
})
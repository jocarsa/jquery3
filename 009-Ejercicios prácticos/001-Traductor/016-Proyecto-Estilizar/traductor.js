var json;
var idioma = "es";
var idiomadesalida = "es";
$(document).ready(function(){
    $("#termino").keyup(function(){
        if($(this).val().length > 2){
            console.log("voy a buscar en el json")
            $("#resultados").html("")
            $.ajax({
                url: "csvAjson.php?termino="+$(this).val(),
                success: function(data){
                    json = JSON.parse(data)
                    console.log(json)
                    for(var i = 0;i<json.length;i++){
                        $("#resultados").append(
                            '<div class="resultado"><img src="img/'+idiomadesalida+'.png">'+json[i][idiomadesalida]+'</div><hr>'
                        )          
                    }
                }
            });
        }
    })
    $(".entrada").change(function(){
        idioma = $(this).attr("idioma")
        console.log("El nuevo idioma seleccionado es: "+idioma)
    })
    $(".salida").change(function(){
        idiomadesalida = $(this).attr("idioma")
        console.log("El nuevo idioma de salida seleccionado es: "+idiomadesalida)
    })
})
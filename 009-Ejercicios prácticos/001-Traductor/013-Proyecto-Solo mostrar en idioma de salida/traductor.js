var json;
var idioma = "es";
var idiomadesalida = "es";
$(document).ready(function(){
    $.ajax({
        url: "csvAjson.php",
        success: function(data){
            json = JSON.parse(data)
            console.log(json)
        }
    });
    $("#termino").keyup(function(){
        console.log("voy a buscar en el json")
        $("#resultados").html("")
        for(var i = 0;i<json.length;i++){
            if(json[i][idioma].toLowerCase().includes($(this).val().toLowerCase())){
                console.log("coincidencia")
                console.log(json[i])
                $("#resultados").append(
                    '<img src="img/'+idiomadesalida+'.png">:'+json[i][idiomadesalida]+'<br><hr>'
                )
            }
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
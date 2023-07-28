var json;
var idioma = "es";
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
                    '<img src="img/es.png">:'+json[i]['es']+'<br>'+
                    '<img src="img/en.png">:'+json[i]['en']+'<br>'+
                    '<img src="img/de.png">:'+json[i]['de']+'<br>'+
                    '<img src="img/fr.png">:'+json[i]['fr']+'<br>'+
                    '<img src="img/it.png">:'+json[i]['it']+'<br><hr>'
                )
            }
        }
    })
    $("input[type=radio]").change(function(){
        idioma = $(this).attr("idioma")
        console.log("El nuevo idioma seleccionado es: "+idioma)
    })
})
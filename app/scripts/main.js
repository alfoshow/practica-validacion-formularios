'use strict';
$(document).ready(function () {
    
    
//CARGO POR AJAX LAS PROVINCIAS.......mejor no, voy a quitar los select option     
    
//var url="http://localhost/validar/validar.php";
//$("#ajaxlocal").html("");
//$.getJSON(url,function(provincias){
//$.each(provincias, function(i,provincia){
//var newRow = "<option value='"+provincia.CodProv+"'>"+provincia.Provincia+"</option>";
//$(newRow).appendTo("#provincia");
//});
//});    
    

//------------------CODIGO PARA VALIDATE-----------    
    
var $requerido='<span class="glyphicon glyphicon-asterisk">';
    
    $('#frm_validar').validate(
        {            
            rules: {
                nombre: {
                    required: true,
                    minlength:4
                    
                }, 
                apellidos: {
                    required: true
                },
                telefono: {
                    required: true,
                    minlength:9
                },                
                email: {
                    email: true,
                    required: true,
                    remote: "http://localhost/validar/email.php"
                },
                email2: {
                    equalTo: "#email"
                },nif:{
                    
                    nifES: true,
                    required: true,
                    remote: "http://localhost/validar/dni.php"

                },cif:{
                    cifES:true,
                    required: true
                },iban:{
                    required: true,
                    iban: true
                },usuario:{
                    minlength:4
                }   
            },
            messages: {
                nombre: {
                    required: "Debes escribir tu nombre",
                    minlength: "Nombre demasiado corto"
                },
                apellidos: {
                    required: "Debes escribir tus apellidos"
                },
                telefono: {
                    required: "Debes escribir tu teléfono",
                    minlength: "Escribe un teléfono válido"
                },                
                email: {
                    email: "El correo electronico no es valido",
                    required: "Escribe tu correo electrónico"
                },
                email2: {
                    email: "El correo electronico no es valido",
                    required: "Escribe tu correo electrónico",
                    equalTo: "Introduce el mismo email"
                },
                iban: {
                    required: "Completa el código IBAN"
                },
                iban: {
                    minlength: "Introduce un nombre de usuario de al menos 4 letras"
                }
            }
        });
    
    
           $("input:radio[name=demandante]").click(function () {	 
               completaDemandante('input:radio[name=demandante]:checked');
			}); 
    
    
           $("input[name=nombre]").keyup(completaNombre); 
           $("input[name=apellidos]").keyup(completaNombre); 
    
           $("input[name=email]").keyup(function () {
               var user=$(this).val(); 
               var nombre = user.split('@')[0];
               $("input[name=usuario]").val(nombre);  
			});  
    
            $("input[name=cp]").keyup(completaLocalidad); 
    
    
           function completaNombre() {    
            var nombre=$("input[name=nombre]").val()+ " "+$("input[name=apellidos]").val();
               $("input[name=nombre_empresa]").val(nombre); 
           }
    
    		function completaDemandante(objeto) {
                //alert($(objeto).val());                
                if ($(objeto).val()=='particular'){                
                    $("label[for=nif]").text("NIF ").append($requerido);
                    $("label[for=nombre_empresa]").text("Nombre");
                    $("input[name=nif]").removeClass("hide");
                    $("input[name=cif]").addClass("hide");                       
                }
                else{
                    $("label[for=nif]").text("CIF ").append($requerido);
                    $("label[for=nombre_empresa]").text("Empresa ").append($requerido);
                    $("input[name=cif]").removeClass("hide");
                    $("input[name=nif]").addClass("hide");
                    //$("label[for=nif]").attr('for','cif');
                }
		      }
    
    		function completaLocalidad() {
//                PASO EL CP DEL DOM AL FICHERO PHP
                
               var cp=$(this).val();   
               
                
                $.ajax({
                      url:"http://localhost/validar/validar.php",
                      type: 'POST',
                      async: true,
                      data: {'parametro1':cp}
                    }).done(function(caca) {
                    
//                     DEVUELVO LA CONSULTA EN UN JSON, NO FUNCIONA

                    
//                      var url="http://localhost/validar/validar.php";
//                        $("#origen").html("");
//                        $.getJSON(url,function(provincias){
//                        $.each(provincias, function(i,provincia){
//                        var newRow = "<p>"+provincia.Provincia+"</p>" + "<p>"+provincia.Municipio+"</p>";
//                        $(newRow).appendTo("#origen");
//                            });
//                        }); 
                    
    });    
                

		      }    
    

      
    

    
});

'use strict';
$(document).ready(function () {
            
    
//------------------CODIGO PARA VALIDATE-----------    
    
var $requerido='<span class="glyphicon glyphicon-asterisk">';
    
    $('#frm_validar').validate(
        {            
            rules: {
                nombre: {
                    required: true,
                    min:4
                    
                }, 
                apellidos: {
                    required: true
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
                   
                }    
                
                
                
            },
            messages: {
                nombre: {
                    required: "Debes escribir tu nombre"
                },
                apellidos: {
                    required: "Debes escribir tus apellidos"
                },
                email: {
                    email: "El correo electronico no es valido",
                    required: "Escribe tu correo electrónico"
                },
                email2: {
                    email: "El correo electronico no es valido",
                    required: "Escribe tu correo electrónico",
                    equalTo: "Introduce el mismo email"
                }
            }
        });
    
    
           $("input:radio[name=demandante]").click(function () {	 
               funciones('input:radio[name=demandante]:checked');
			}); 
    
           $("input[name=nif]").blur(function () {	
                alert("shit");
               completaNombre();
			});     
    
    		function funciones(objeto) {
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
    
    		function completaNombre() {
            
            alert("shits");
            
            }    
    

    
});

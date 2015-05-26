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
                    required: true,
                    remote: "http://www.futbolistas.com/users.php"
                },
                email: {
                    email: true,
                    required: true,
                    remote: "http://localhost/validar/email.php"
                },
                email2: {
                    equalTo: "#email"
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
    
    		function funciones(objeto) {
                //alert($(objeto).val());                
                
                if ($(objeto).val()=='particular'){                
                    $("label[for=nif]").text("NIF ").append($requerido);
                    $("label[for=nombre_empresa]").text("Nombre ").append($requerido);
                }
                else{
                    $("label[for=nif]").text("CIF ").append($requerido);
                    $("label[for=nombre_empresa]").text("Empresa ").append($requerido);
                }

		      }
    

    
});

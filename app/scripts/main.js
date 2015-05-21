'use strict';
$(document).ready(function () {
            
    
//------------------CODIGO PARA VALIDATE-----------    
    

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
                edad: {
                    required: true,
                    min:1,
                    max:99                    
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
                edad: {
                    required: "Escribe una edad",
                    min:"Escribe una edad correcta",
                    max:"Escribe una edad correcta"
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
    

    

    
    
    
    
    
    
    
});

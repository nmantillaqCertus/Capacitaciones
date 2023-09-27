


$(".finit").on('click', function(){

    debugger

     if(validarFormulario()){
        let respuestaUsuario = validarUsaurio();

        if(respuestaUsuario.existe && respuestaUsuario.contrasenia){
            iniciarAPP();
        }else{
            //lanzar mensajes
            //Usuario contraseña incorrecta
        }
     }


});


function validarFormulario(){
    //todo esta correcto
    return true;
}

function validarUsaurio(){

    // va ir base de datos y tratar de hacer match

    let objetoValidado = {        
        existe : true,
        contrasenia : false,
        usuario: {
            nombres:"",
            correo:"",
            otrosDatos:""
        }
    }
    return objetoValidado;
    
}
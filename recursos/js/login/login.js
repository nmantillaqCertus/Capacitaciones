




$(".finit").on('click', function () {
    //debugger
    if (validarFormulario()) {
        let aux_Usuario = $("#ID_Usuario").val().trim();
        let aux_Contrasenia = $("#ID_Contrasenia").val();
        let respuestaUsuario = validarUsaurio(aux_Usuario, aux_Contrasenia);
        if (respuestaUsuario.existe && respuestaUsuario.contrasenia) {

            console.log(respuestaUsuario);

            $("#ID_MsjError").hide();
            iniciarAPP(respuestaUsuario);
        } else {
            console.log(respuestaUsuario);
            $("#ID_MsjError").show();
        }
    } else {
        $("#ID_MsjError").show();
    }
});


function validarFormulario() {
    let tokenVal;
    let aux_Usuario = $("#ID_Usuario").val().trim();
    let aux_Contrasenia = $("#ID_Contrasenia").val();

    if (aux_Usuario.length > 0 && aux_Usuario != undefined &&
        aux_Contrasenia.length > 0 && aux_Contrasenia != undefined) {
        tokenVal = true;
    } else {
        tokenVal = false;
    }
    return tokenVal;
}

function iniciarAPP(usuarioLogged) {
    let userAux = usuarioLogged.usuario.usuario
    window.location = "./modulos/programas/bandeja.html?U=" + userAux;
}

function validarUsaurio(usuario, contrasenia) {

    let objetoValidado;
    const Roles_Final = getRoles();
    const usuario_final = getUser(usuario,contrasenia);
    
    //let usuarioRecuperado = lista_Usuario.find(x => x.usuario == usuario);
    if(usuario_final.estado){
        let usuarioRecuperado = usuario_final.data;

        try {
            if (usuarioRecuperado.usuario.length > 0 && usuarioRecuperado != undefined && usuarioRecuperado != null) {
    
                if (usuario_final.estado) {
    
                    let userRol = Roles_Final.find(r => r.cod == usuarioRecuperado.id_rol);                    

                    if(userRol == undefined || userRol == null){
                        userRol = {}
                     }else{
                        userRol = {
                                    nombre: userRol.nombre,
                                    cod: userRol.cod
                                }
                     }
    
                    objetoValidado = {
                        existe: true,
                        contrasenia: true,
                        usuario: {
                            nombres: usuarioRecuperado.nombres,
                            correo: usuarioRecuperado.correo,
                            dni: usuarioRecuperado.dni,
                            telefono: usuarioRecuperado.telefono,
                            usuario: usuarioRecuperado.usuario,
                            rol: userRol
                        }
                    }
    
                } else {
                    objetoValidado = {
                        existe: true,
                        contrasenia: false,
                        usuario: null
                    }
                }
    
            } else {
                objetoValidado = {
                    existe: false,
                    contrasenia: false,
                    usuario: null
                }
            }
    
        } catch (error) {
            console.log(error);
            objetoValidado = {
                existe: false,
                contrasenia: false,
                usuario: null
            }
        }

    }else {
        objetoValidado = {
            existe: false,
            contrasenia: false,
            usuario: null
        }
    }
    return objetoValidado;

}

function getRoles(){
    let respuesta_rol;
    var settings = {
        "url": "http://localhost:8000/api/roles",
        "method": "GET",
        "async": false,
        "headers": {
            "Content-Type": "application/json"
        }
    };

    $.ajax(settings).done(function (r) {
        respuesta_rol = r;
    });    
    return respuesta_rol;
}

function getUser(v_user, v_pass) {
    
    let response;
    let data_response;

    try {

        //Operacion con DB

        var settings = {
            "url": "http://localhost:8000/api/usuarioOK/",
            "method": "POST",
            "async": false,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "usuario": v_user,
                "contrasenia": v_pass
            }),
        };

        $.ajax(settings).done(function (r) {
            data_response = r;
        });

        return response = {
            estado: true,
            mensajeError: "Ok",
            data: data_response
        }

    } catch (error) {

        return response = {
            estado: false,
            mensajeError: error,
            data: {}
        }
    }
}

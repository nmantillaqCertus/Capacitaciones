$(document).ready(function () {
    getParam();
});

let UserObject;
let table_Pragramas = new DataTable('#ID_tb_Programas');

function getParam() {
    let url_path = location.href;
    let array_Params = url_path.split("?");
    let aux_Param = array_Params[1];
    let tokenValidate;
    
    if(aux_Param != undefined &&  aux_Param.includes("U")){
        let User_Aux = aux_Param.split("=")[1];
        if(User_Aux.length > 0 && User_Aux != undefined){
            UserObject = lista_Usuario.find(u=>u.usuario == User_Aux);
            try {
                if(UserObject.usuario.length > 0 && UserObject != undefined){
                    tokenValidate = true;

                    $("#id_user").text(UserObject.nombres);


                }else{
                    tokenValidate = false; 
                }                
            } catch (error) {
                tokenValidate = false;
            }
        }else{
            tokenValidate = false;
        }
    }else{
        tokenValidate = false;
    }

    if (tokenValidate) {
        iniciarBandeja()
    }else{
        window.location = "/index.html"
    }
}

function iniciarBandeja() {
    console.log("Bandeja de programas esta lista para usar")
}
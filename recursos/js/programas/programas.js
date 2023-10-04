$(document).ready(function () {
    getParam();
});

let UserObject;
//let table_Programas = new DataTable('#ID_tb_Programas');
let table_Programas = $('#ID_tb_Programas').DataTable({
    "language":{
        "search":"Buscar",
        "paginate":{
            "first":"Primero",
            "last":"ultimo"
        }
    }
});;

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

    //table_Pragramas
    for(let i=0; i<lista_Programas.length; i++){
        table_Programas.row.add([
            "<span>"+lista_Programas[i].Cod_Programa+"</span>",
            "<span>"+lista_Programas[i].Nombre_Programa+"</span>",
            "<span>"+lista_Programas[i].Cursos.length+"</span>",
            "<span>"+lista_Programas[i].Fecha_inicio+"</span>",
            "<span>"+lista_Programas[i].Fecha_Fin+"</span>",
            "<span> <span class='btn btn-sm btn-success'> ver programa </span> </span>"
        ]).draw(true);
    }

    console.log("Bandeja de programas esta lista para usar")
}
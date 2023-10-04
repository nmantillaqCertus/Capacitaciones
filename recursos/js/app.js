var lista_Usuario = [
    {
        nombres: "Soy el Admin",
        correo: "admin@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "admin",
        contrasenia: "admin123456",
        id_rol: 1
    },
    {
        nombres: "Soy el Docente",
        correo: "docentet@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "docente",
        contrasenia: "docente123456",
        id_rol: 2
    },
    {
        nombres: "Soy el Alumno",
        correo: "alumno@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "alumno",
        contrasenia: "alumno123456",
        id_rol: 2
    }
]

var lista_Roles = [
    {
        id: 1,
        nombre: "Administrador",
        cod: "ADM"
    },
    {
        id: 2,
        nombre: "Docente",
        cod: "DOC"
    },
    {
        id: 3,
        nombre: "Alumno",
        cod: "ALU"
    }
]

var lista_Programas = [
    {
        Cod_Programa: "P001",
        Nombre_Programa:"Especialización de Excel",
        Nro_Cursos:3,
        Fecha_inicio:"01/10/2023",
        Fecha_Fin:"15/12/2023"
    },
    {
        Cod_Programa: "P002",
        Nombre_Programa:"Especialización de Power BI",
        Nro_Cursos:2,
        Fecha_inicio:"01/11/2023",
        Fecha_Fin:"20/12/2023"
    },
    {
        Cod_Programa: "P003",
        Nombre_Programa:"Técnicas de venta",
        Nro_Cursos:1,
        Fecha_inicio:"01/11/2023",
        Fecha_Fin:"20/11/2023"
    }
]

/*
function obtenerdata(req,res){
    let entityAux = req;
    entityAux.uri;
    https://certus.api/programas
    res = <Arreglo></Arreglo>;

    //ajax <= Servicio REST (Node JS)

    return res;
}*/
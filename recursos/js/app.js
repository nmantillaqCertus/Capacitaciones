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
        Cursos:["C001","C003"],
        Fecha_inicio:"01/10/2023",
        Fecha_Fin:"15/12/2023"
    },
    {
        Cod_Programa: "P002",
        Nombre_Programa:"Especialización de Power BI",
        Cursos:["C001","C002","C003"],
        Fecha_inicio:"01/11/2023",
        Fecha_Fin:"20/12/2023"
    },
    {
        Cod_Programa: "P003",
        Nombre_Programa:"Técnicas de venta",
        Cursos:["C003"],
        Fecha_inicio:"01/11/2023",
        Fecha_Fin:"20/11/2023"
    }
]

let lista_Cursos = [
    {
        Cod_Curso:"C001",
        Nombre_Curso:"",
        Duracion:8,
        Tiempo:"Horas",
        Temas:[
            {
                Cod_Tema:"T001",
                Nombre_Tema:""
            },
            {
                Cod_Tema:"T002",
                Nombre_Tema:""
            }
        ]
    },
    {
        Cod_Curso:"C002",
        Nombre_Curso:"",
        Duracion:24,
        Tiempo:"Horas",
        Temas:[
            {
                Cod_Tema:"T001",
                Nombre_Tema:""
            },
            {
                Cod_Tema:"T002",
                Nombre_Tema:""
            }
        ]
    },
    {
        Cod_Curso:"C003",
        Nombre_Curso:"",
        Duracion:24,
        Tiempo:"Horas",
        Temas:[
            {
                Cod_Tema:"T001",
                Nombre_Tema:""
            },
            {
                Cod_Tema:"T002",
                Nombre_Tema:""
            }
        ]
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
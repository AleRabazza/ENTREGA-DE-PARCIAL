//EJERCICIO 1
const medidasGalpones = [{largo: 2, ancho:2}, {largo: 2, ancho:2} ];

function golpes (medidasGalpones){
    let totalArea = 0;
    for(let mediadaGalpon of medidasGalpones){
        let area = mediadaGalpon.ancho * mediadaGalpon.largo;
        totalArea = totalArea + area;
    }
    return totalArea;
}

console.log(golpes(medidasGalpones));

// EJERCICIO 2
arrayMaquinas = [ 
    { nombreMaquina: "Torno Industrial", superficieDeOperacionRequerida: 40 },
    { nombreMaquina: "Torno Industrial2", superficieDeOperacionRequerida: 20 }
];
let num = 30;
function encontrarMaquina (num, arrayMaquinas){
    let encontroMaquina = false;
    for(maquina of arrayMaquinas){
        if(maquina.superficieDeOperacionRequerida == num || maquina.superficieDeOperacionRequerida < num){
            encontroMaquina = true; 
        }           
    }
   return encontroMaquina;
}

console.log(encontrarMaquina(num,arrayMaquinas));


//EJERCICIO 3

const arrayInversores = [
    { nombre: "Lopez Mena", capital: 90 },
    { nombre: "Rabazza Alejandra", capital: 2000000000 }
];

function filtrarInversoresVIP (arrayInversores){
    const inversoresConPlata = [];
    for(let inversor of arrayInversores){
        if(inversor.capital > 1000000){
            let inversorConPlata =  inversor.nombre;
            inversoresConPlata.push(inversorConPlata);
        }
    }
    return inversoresConPlata;
}


console.log(filtrarInversoresVIP(arrayInversores));


//EJERECICIO 4

const arrayRobot = [
    { nombre: "Robot Triturador", cantidad: 5 },
    { nombre: "Robot Aplastador", cantidad: 4 }
];

function cantDeRobot (arrayRobot){
    let liRobots = [];
    for(let robot of arrayRobot){
        let li = document.createElement ("li");
        li.innerHTML = (`${robot.nombre}: ${robot.cantidad}`);
        liRobots.push(li);
    }

    return liRobots;
}


//EJERCICIO 5

class Robot {
    constructor (nombre, precio, anoFabricado){
            this.nombre = nombre;
            this.precio = precio;
            this.anoFabricado = anoFabricado;
    }
    
    mostrarInfoRobot(){
        console.log(`nombre del robot: ${this.nombre}`);
        console.log(`perecio del robot: ${this.precio}`);
        this.calcularAnoFabricado;
    }

    calcularAnoFabricado(){
        let edad = 0;
        edad = 2024 - this.anoFabricado;
        console.log(`Edad del robot: ${edad}`);
    }

    static mensajeEscrito(){
        console.log("Este es un metodo estatico de la clase Robot");
    }

    static nuevoRobot (){
        return new Robot("Tomas", precio, anoFabricado);
    }

    static precioDeTodosLosRobots (robots){
        let precioTotal = 0;
        for(let robot of robots){
            edadTotal += robot.precio;
        }
    console.log(`El precio total de todos los robots es:${precioTotal}`);
}
}
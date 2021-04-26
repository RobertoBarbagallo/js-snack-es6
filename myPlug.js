
const bikes = [

    {
        nome: "Bianchi Aria Disc",
        peso: 800
    },

    {
        nome: "Bh Quartz 3.5",
        peso: 900
    },

    {
        nome: "Bmc Roadmachine disc 02",
        peso: 1000
    },

    {
        nome: "Bottecchia Rd Domina Disc",
        peso: 1200
    },

    {
        nome: "B’Twin Ultra 920",
        peso: 800
    },

    {
        nome: "Cannondale Super Six Evo",
        peso: 1150
    },

    {
        nome: "Canyon Endurance CF SL Disc 8.0",
        peso: 800
    },

    {
        nome: "Carrera ER-01",
        peso: 750
    }
];

const arrayDeiPesi = []

for (let index = 0; index < bikes.length; index++) {
    const element = bikes[index];
    const { peso } = element;
    arrayDeiPesi.push(peso)
}

console.log(arrayDeiPesi);


var valoreMinimo = arrayDeiPesi[0]
valoreMinimo = newMinOfArray(arrayDeiPesi)

function newMinOfArray (array){
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if(element < valoreMinimo){
            valoreMinimo = element
        }
    }
    console.log(valoreMinimo)

}


// var valoreMinimo = Infinity

// function minOfArray(array) {
//     for (let index = 0; index < array.length; index++) {
//         let element = array[index]

        
//         for (let indice = 0; indice < array.length; indice++) {
//             let elementTwo = array[indice];

//             if(element < elementTwo && element < valoreMinimo){
//                 valoreMinimo = element
//             }else if (element > elementTwo && elementTwo < valoreMinimo){
//                 valoreMinimo = elementTwo
//             }else if (element === elementTwo && element < valoreMinimo){
//                 valoreMinimo = element
//             }    
//         }           
//     }
// }

// minOfArray(arrayDeiPesi)

// console.log(valoreMinimo)


const teams = [

    {
        nome: "Real",
        puntiFatti : 0,
        falliSubiti: 0
    },
    {
        nome: "Juve",
        puntiFatti : 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti : 0,
        falliSubiti: 0
    },
    {
        nome: "Atletico Madrid",
        puntiFatti : 0,
        falliSubiti: 0
    },
    {
        nome: "Borussia Dortmund",
        puntiFatti : 0,
        falliSubiti: 0
    },
   
];

function randomNum(minNum, maxNum) {
    var rndNum = parseInt((Math.random() * maxNum) + minNum)
    return rndNum
}


for (let index = 0; index < teams.length; index++) {
    const squadra = teams[index];

    squadra.puntiFatti = randomNum(1, 12)
    squadra.falliSubiti = randomNum (1, 100)
    
}

console.log(teams)


for (let index = 0; index < teams.length; index++) {
    const object = teams[index];
   

    const {nome, falliSubiti} = object


    console.log(nome, falliSubiti)
    
}





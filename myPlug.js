
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

var valoreMinimo = Infinity

function minOfArray(array) {
    for (let index = 0; index < array.length; index++) {
        let element = array[index]

        
        for (let indice = 0; indice < array.length; indice++) {
            let elementTwo = array[indice];

            if(element < elementTwo && element < valoreMinimo){
                valoreMinimo = element
            }else if (element > elementTwo && elementTwo < valoreMinimo){
                valoreMinimo = elementTwo
            }else if (element === elementTwo && element < valoreMinimo){
                valoreMinimo = element
            }    
        }           
    }
}

minOfArray(arrayDeiPesi)

console.log(valoreMinimo)


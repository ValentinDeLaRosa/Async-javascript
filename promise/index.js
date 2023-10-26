


const cows = 5;

const countCows = new Promise( function(resolve, reject){
    if (cows > 10) {
        resolve (`We have ${cows} on the farm`);
    }
    else {
        reject ('There are not enough cows');
    }
})

countCows.then((result) => {
    console.log(result);
})

countCows.catch((error) => {
    console.log(error)
})

//Reto solucionado
//El resolve le pasa la variable "Mesagge" al .then, este le asigna "Message" a la variable "vbleRecibida",
//es así como se comunica el resolve y el .then
function delay(time, message, number) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(message);
        }, time)
    })
}

delay(3000, "Hello after 3s", 2).then((vbleRecibida) => console.log(vbleRecibida));
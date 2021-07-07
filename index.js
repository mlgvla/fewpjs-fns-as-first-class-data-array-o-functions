const wakeDog = function wakeDog(dog, breed) {
    const string = `Wake ${dog} the ${breed}`
    console.log(string)
    return string
}
const leashDog = function leashDog(dog, breed) {
    const string = `Leash ${dog} the ${breed}`
    console.log(string)
    return string
}

const walkToPark = function walkToPark(dog, breed) {
    const string = `Walk to the park with ${dog} the ${breed}`
    console.log(string)
    return string
}

const throwFrisbee = function throwFrisbee(dog, breed) {
    const string = `Throw the frisbee for ${dog} the ${breed}`
    console.log(string)
    return string
}

const walkHome = function walkHome(dog, breed) {
    const string = `Walk home with ${dog} the ${breed}`
    console.log(string)
    return string
}

const unleashDog = function unleashDog(dog, breed) {
    const string = `Unleash ${dog} the ${breed}`
    console.log(string)
    return string
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


function exerciseDog(dogName, dogBreed) {
    const newArray = []

    for (let i = 0; i < routine.length; i++) {
        let fn = routine[i]
        newArray.push(fn(dogName, dogBreed))   
    }
    return newArray
}
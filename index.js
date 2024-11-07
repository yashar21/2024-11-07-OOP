class Animal {
    constructor (name,species){
        this.name=name;
        this.species=species;
    }
    speak() {
        console.log(`the animal, ${this.name} makes a sound`)
    }
}

const myDog= new Animal ("figo","labrador");
const myOtherDock = new Animal ("sigge","tax");
const myCat= new Animal("mozart","russian blue");

console.log(myDog.namn);
console.log(myCat.namn);
console.log(myOtherDock.namn);
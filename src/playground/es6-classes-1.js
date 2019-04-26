class Person {
    constructor(name = 'anonymous', age = 0){
        this.name = name
        this.age = age
    }
    getPerson(){
        return `${this.name} is ${this.age} years old`
    }
    getGreeting(){
        return `Hi, I am ${this.name}`
    }
}

class Student extends Person {
    constructor(name, age, major = 'none'){
        super(name,age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getPerson(){
        
        let description = super.getPerson()
        if(this.hasMajor){
            return description += ` and majored in ${this.major}`
        }else{
            return description
        }
        //
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name,age)
        this.homeLocation = homeLocation
    }
    hasLocation(){
        return !!homeLocation
    }
    getGreeting(){
        let description = super.getPerson()
        if(this.hasLocation){
            return description += ` and lives in ${this.homeLocation}`
        }else{
            return description
        }
    } 
}

const me = new Traveller('stuart',35,'manchester')
const chester = new Person('chester',14.8)

console.log(me.getGreeting())
console.log(chester.getGreeting())
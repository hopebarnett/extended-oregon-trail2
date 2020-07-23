class Traveler {
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    
        console.log("hello")
    }    

    hunt(){
    //    increase food by 2
    this.food = this.food + 2
    }

    eat(){
        if(this.food >= 1){
            this.food = this.food - 1
            this.isHealthy = true
        } else {
            this.isHealthy = false
        }

    }
   
}

class Doctor extends Traveler {
    constructor(name){
        super(name)
    }
    // The super keyword refers to the parent class. 
    // It is used to call the constructor of the parent class and 
    // to access the parent's properties and methods. 
    // Tip: To understand the "inheritance" concept (parent and child classes) 
    // better, read our JavaScript Classes Tutorial.   

    heal(traveler) {
       traveler.isHealthy = true  
    }
}

// class Hunter extends Traveler {
//     constructor(name) {
//         super(name)
//         this.food = 2
//     }

//     // The extends keyword is used to create a child class of another class (parent).
//     // The child class inherits all the method from another class. 
//     // Inheritance is useful for code reusability: 
//     // reuse properties and methods of an existing class when you create a new class.



//     hunt() {
//        // Increase the hunter's food by 5. (A normal traveler gains only 2.) 
//         this.food = this.food + 5

//     }
    
//     eat() {
//         // Consumes 2 units of food. If the hunter doesn't have 2 food when 
//         // they are instructed to eat, they eat as much as they can (0 or 1 unit),
//         //  but the hunter is no longer healthy.
//         if(this.food >= 2){
//             this.food = this.food - 2
//             this.isHealthy = true
//         } else {
//             this.food = 0
//             this.isHealthy = false
//         }
//     }

//     giveFood() {
//         // Transfers numOfFoodUnits from the hunter to the traveler
//         // . If the hunter doesn't have enough food, 
//         // then no food should be transferred.
//         this.Traveler = Traveler
//         this.numOfFoodUnits = 12
    
//         this.shouldQuarantine = false
//         if (this.numOfFoodUnits >= 3) {
//             this.transfers = true
//             this.shouldQuarantine = false
//         } else {
//             this.tranfers = false
//             this.shouldQuarantine = true
//         }
        
//     }

// }


class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []

    }

    getAvailableSeatCount(){
        // or1ginalCapacity - numberOfPassengers
        // return numberOfEmptySeats
        this.availableSeat = this.capacity - this.passengers.length;

        if(this.availableSeat >= 0){
            return this.availableSeat;
        }  else  {
            return 0;
        }
    }

    join(traveler){
        this.getAvailableSeatCount();
        if(this.availableSeat > 0){
            this.passengers.push(traveler);
            (this.traveler) - ["passengers"]
            // The push() method adds new items to the end of an array, 
            // and returns the new length. 
            // Note: The new item(s) will be added at the end of the array. 
            // Note: This method changes the length of the array. 
            // Tip: To add items at the beginning of an array, 
            // use the unshift() method.
        }
    }

    shouldQuarantine(){
        for (let i = 0; i < this.passengers.length; i = i + 1){
            let currentPassenger = this.passengers[i]
            if (currentPassenger.isHealthy === false){
               
                    return true
            }
        }
        return false
    }   

    totalFood(){
        let sum = 0;
        for (let i = 0; i < this.passengers.length; i = i + 1){
            let currentPassenger = this.passengers[i]
            sum = sum + currentPassenger.food;
            
        }
        return sum;
    }
}



// let wagon = new Wagon(2)
// // Create three travelers
// let henrietta = new Traveler('Henrietta')
// let juan = new Traveler('Juan')
// let maude = new Traveler('Maude')
// console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } 
// – EXPECTED: 2. The wagon starts with 2 seats. 
// We haven't added travelers to the wagon yet.`)
// wagon.join(henrietta)
// console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } 
// – EXPECTED: 1. Henrietta just joined.`)
// wagon.join(juan)
// wagon.join(maude)  // There is no room for her!
// console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } 
// – EXPECTED: 0 – There is no room for Maude, 
// but Juan was able to join.`)
// henrietta.hunt()   // Henrietta goes in search of food.
// juan.eat()         // Juan eats – as Juan does. 🤣
// juan.eat()         // Juan has run out of food!
// console.log(juan)
// console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. 
// Juan has run out of food and become unhealthy!`)
// console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }

    // The extends keyword is used to create a child class of another class (parent).
    // The child class inherits all the method from another class. 
    // Inheritance is useful for code reusability: 
    // reuse properties and methods of an existing class when you create a new class.



    hunt() {
       // Increase the hunter's food by 5. (A normal traveler gains only 2.) 
        this.food = this.food + 5

    }
    
    eat() {
        // Consumes 2 units of food. If the hunter doesn't have 2 food when 
        // they are instructed to eat, they eat as much as they can (0 or 1 unit),
        //  but the hunter is no longer healthy.
        if(this.food >= 2){
            this.food = this.food - 2
            this.isHealthy = true
        } else {
            this.food = 0
            this.isHealthy = false
        }
    }

    giveFood(Traveler, numOfFoodUnits) {
        // Transfers numOfFoodUnits from the hunter to the traveler
        // . If the hunter doesn't have enough food, 
        // then no food should be transferred.
        // this.Traveler = Traveler
        // this.numOfFoodUnits = 12
    
        // this.shouldQuarantine = false
        // if (this.numOfFoodUnits >= 3) {
        //     this.transfers = true
        //     this.shouldQuarantine = false
        // } else {
        //     this.tranfers = false
        //     this.shouldQuarantine = true
        // }
        
        if(this.food >= numOfFoodUnits) {
            this.food = this.food - numOfFoodUnits
            Traveler.food = Traveler.food + numOfFoodUnits 
        }
    }

}



// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);
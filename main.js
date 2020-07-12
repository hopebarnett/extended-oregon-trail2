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
        }
    }

    shouldQuarantine(){
        for (let i = 0; i < this.passengers.length; i = i + 1){
            let currentPassenger = this.passengers[i]
            if (currentPassenger.isHealthy === false){
                }  else {
                    return true
            }
        }
    }

    totalFood(){
        let sum = 0;
        for (let i = 0; i < this.passengers.length; i = i + 1){
            let currentPassenger = this.passengers[i]
            sum = sum + currentPassenger.food;
            return sum;
        }
    }
}



let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } 
– EXPECTED: 2. The wagon starts with 2 seats. 
We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } 
– EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } 
– EXPECTED: 0 – There is no room for Maude, 
but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. 
Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)
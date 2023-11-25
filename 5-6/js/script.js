//Name: Rishabh Vinay Bhagat.
//ID: C0892204.

//initializing car properties by constructor. 
class Car {
    constructor(Brand, Model, Year, Color, Price, Gas) {
      this.Brand = Brand;
      this.Model = Model;
      this.Year = Year;
      this.Color = Color;
      this.Price = Price;
      this.Gas = Gas;
    }
//honk method 
    honk() {
      console.log(`Tuut tuut!!! It is a ${this.Brand} ${this.Model} ${this.Year} in ${this.Color} color, priced at $${this.Price}`);
    }
//race method
    race(turns) {
        for (let i = 0; i < turns; i++) {
          if (this.Year < new Date().getFullYear()) {
            this.Gas -= 5 + (new Date().getFullYear() - this.Year);
          } else {
            this.Gas -= 5;
          }

          if (this.Gas <= 0) {
            console.log(`The ${this.Brand} ${this.Model} ran out of gas after ${i + 1} turns.`);
            return;
        }
        }
        console.log(`After number of ${turns} turns, the ${this.Brand} ${this.Model} has ${this.Gas} litres remaining gas.`);
    }
  }

//creating instances for each car
  const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
  const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
  const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
  const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
  const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
  const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);
  
  const cars = [car1, car2, car3, car4, car5, car6];

//each car is honking
  cars.forEach((car) => {
    car.honk();
  });

// each car is running race for 7 turns
car1.race(7);
car2.race(7);
car3.race(7);
car4.race(7);
car5.race(7);
car6.race(7);
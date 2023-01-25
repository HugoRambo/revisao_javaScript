class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hellou, my name is " + this.name, "eu tenho" + this.age)
    }


}

const person1 = new Person("Hugo", 27)

person1.greet()



class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`The ${this.make} ${this.model} is now going ${this.speed} mph.`);
    }
  
    brake() {
      if (this.speed > 0) {
        this.speed -= 10;
        console.log(`The ${this.make} ${this.model} is now going ${this.speed} mph.`);
      } else {
        console.log(`The car is already stopped.`);
      }
    }
  }
  
  const myCar = new Car("Toyota", "Camry", 2019);
  myCar.accelerate(); // Output: "The Toyota Camry is now going 10 mph."
  myCar.accelerate(); // Output: "The Toyota Camry is now going 20 mph."
  myCar.brake(); // Output: "The Toyota Camry is now going 10 mph."
  myCar.brake(); // Output: "The Toyota Camry is now going 0 mph."
  myCar.brake(); // Output: "The car is already stopped."
  
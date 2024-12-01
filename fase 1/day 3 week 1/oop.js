
class Animal {
  constructor (name, spesies) {
    this.name = name,
    this.spesies = spesies
    
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Bird extends Animal {
  constructor (name, spesies, canFly) {
    super(name, spesies)
    this.canFly = canFly
  }

  fly() {
    if (this.canFly) {
      console.log(`${this.name} is flying`);
    } else {
      console.log(`${this.name} cannot fly`);
    }
  }
}

class Fish extends Animal {
  constructor (name, spesies, canSwim) {
    super(name, spesies)
    this.canSwim = canSwim
  }

  makeSound() {
    console.log(`${this.name} makes underwater sound`);
  }

  swim() {
    if (this.canSwim) {
      console.log(`${this.name} can swimming`);
    } else {
      console.log(`${this.name} cannot swim`);
    }
  }
}

const eagle = new Bird ('Eagle', 'Bird', true)
const pinguin = new Bird ('Pinguin', 'Bird', false)
const shark = new Fish ('Shark', 'Fish', true)
const octopus = new Fish ('Octopus', 'Fish', false)

eagle.makeSound();  
eagle.fly();        

pinguin.makeSound();  
pinguin.fly();        

shark.makeSound();  
shark.swim();        

octopus.makeSound();  
octopus.swim();  



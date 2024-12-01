const data = require('./data')

class Iphone {
    constructor(brand, price, type, memory, brandBattery, typeBattery, capacity) {
        this.brand = brand
        this.price = price
        this.type = type
        this.memory = memory
        this.brandBattery = brandBattery,
        this.typeBattery = typeBattery,
        this.capacity = capacity
    }
}

class Samsung {
    constructor(brand, price, type, memory, brandBattery, typeBattery, capacity) {
        this.brand = brand
        this.price = price
        this.type = type
        this.memory = memory
        this.brandBattery = brandBattery,
        this.typeBattery = typeBattery,
        this.capacity = capacity
    }
}

class Factory {
    static createHandphone (brand, price, type, memory, brandBattery, typeBattery, capacity) {
        if (brand === 'Apple') {
            return new Iphone(brand, price, type, memory, brandBattery, typeBattery, capacity)
        } else if (brand === 'Samsung') {
            return new Samsung(brand, price, type, memory, brandBattery, typeBattery, capacity)
        }
    }
    static createHandphoneWithObjParam (element) {
        let {brand, price, type, memory, brandBattery, typeBattery, capacity} = element
        if (brand === 'Apple') {
            return new Iphone(brand, price, type, memory, brandBattery, typeBattery, capacity)
        } else if (brand === 'Samsung') {
            return new Samsung(brand, price, type, memory, brandBattery, typeBattery, capacity)
        }
    }
    static createHandphoneWithObjParam2 (element) {
        let {brand, price, type, memory, brandBattery, typeBattery, capacity} = element
        const obj = {'Apple': Iphone, 'Samsung': Samsung}

        return new obj[brand] (brand, price, type, memory, brandBattery, typeBattery, capacity)
    }
}

// const casing = new Case('Silicon', 'Transparant')

const result = data.map(el => {
    let {brand, price, type, memory, brandBattery, typeBattery, capacity} = el
    return Factory.createHandphone(brand, price, type, memory, brandBattery, typeBattery, capacity)
})

const resultByObj = data.map(el => {
    return Factory.createHandphoneWithObjParam2(el)
})

console.log(result)
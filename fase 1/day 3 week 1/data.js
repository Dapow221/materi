const data = [
    {
        brand : "Apple", 
        price: 10000,
        type: "15 Pro", 
        memory: "512 Gb",
        brandBattery: "Apple",
        typeBattery: "Lithium",
        capacity: "5000 mAh"
    },
    {
        brand : "Samsung", 
        price: 20000,
        type: "S12", 
        memory: "512 Gb",
        brandBattery: "Samsung",
        typeBattery: "Lithium",
        capacity: "5000 mAh"
    },
    {
        brand : "Samsung", 
        price: 40000,
        type: "X12", 
        memory: "512 Gb",
        brandBattery: "Samsung",
        typeBattery: "Lithium",
        capacity: "5000 mAh"
    },
    {
        brand : "Apple", 
        price: 50000,
        type: "10 Pro", 
        memory: "512 Gb",
        brandBattery: "Apple",
        typeBattery: "Lithium",
        capacity: "5000 mAh"
    }
]

class Ac {
    constructor (brand, price, watt, utility, type, brandMesin, priceMesin, utilityMesin, sticker) {
      this.brand = brand
      this.price =  price
      this.watt = watt
      this.utility = utility
      this.type = type
      this.mesin = new Mesin (brandMesin, priceMesin, utilityMesin)
      this.stickers = sticker 
    }
  } 
  
  class Mesin {
    constructor (brand, price, utility) {
      this.brand = brand
      this.price = price
      this.utility = utility
    }
  }
  
  class Sticker {
    constructor (material, color) {
      this.material = material
      this.color = color
    }
  }
  
  const sticker = new Sticker ('plastik', 'blue')
  const aranaa = new Ac ('Hikari', 3_000_000, 3500, 'Mendinginkan ruangan' , 'Central AC', 'Blower', 500_000, 'Menghisap udara', sticker)
  console.log(aranaa);

module.exports = data


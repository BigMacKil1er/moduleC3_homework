class ElectricalAppliance {
    constructor (name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false
    }
    plugIn () {
        console.log(this.name + 'is plugged!')
        this.isPlugged = true
    }
    unplug () {
        console.log(this.name + 'is unplugged')
        this.isPlugged = false
    }
}

class Comp extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false
    }
}
class Lamp extends ElectricalAppliance {
    constructor(name, brand, power, bulbType) {
        super(name, power);
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.bulbType = bulbType;
    }
}

const tableLamp = new Lamp("TableLamp", "Xiaomi", 5, "LED");
const homePC = new Comp("Table PC", "AMD", 120, "stationary", "for work");

tableLamp.unplug()
homePC.plugIn()

console.log(homePC)
console.log(tableLamp)
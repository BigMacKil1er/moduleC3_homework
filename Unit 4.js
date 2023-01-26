function ElectricalAppliance (name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false
}
ElectricalAppliance.prototype.plugIn = function () {
    console.log(this.name + 'is plugged!')
    this.isPlugged = true
}

ElectricalAppliance.prototype.unplug = function () {
    console.log(this.name + 'is unplugged')
    this.isPlugged = false
}

function Comp (name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false
}

Comp.prototype = new ElectricalAppliance()
function Lamp (name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
}

Lamp.prototype = new ElectricalAppliance()

const tableLamp = new Lamp("TableLamp", "Xiaomi", 5, "LED");
const homePC = new Comp("Table PC", "AMD", 120, "stationary", "for work");

tableLamp.unplug()
homePC.plugIn()

console.log(homePC)
console.log(tableLamp)
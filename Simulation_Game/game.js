function VehicleAre(brand,model,speed,fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed ;
    this.fuelType = fuelType;
};

VehicleAre.prototype.accelerate = function(){
    this.speed = this.speed + 10;
    console.log(`Speed is increased, now speed is ${this.speed} km/h`);
}
VehicleAre.prototype.brake = function(){
    this.speed = this.speed -10;
    console.log(`Brake applied, speed is decreased, now speed is ${this.speed} km/h`)
}
VehicleAre.prototype.refuel = function(){
    console.log("Vehicle is refuiling");
}


// Car Function
function MyCar(brand,model,speed,fuelType,numberOfWheels,doors){
    VehicleAre.call(this,brand,model,speed,fuelType);
    this.numberOfWheels = numberOfWheels;
    this.doors = doors;
};

Object.setPrototypeOf(MyCar.prototype,VehicleAre.prototype);
MyCar.prototype.honk = function(){
    console.log("Honk Sound");
};
MyCar.prototype.cardoors = function(){
    console.log(`Car has ${this.doors} number of doors`);

}


// Airplane  Function
function AirPlane(brand,model,speed,fuelType,numberOfEngine,hasLandingGear){
    VehicleAre.call(this,brand,model,speed,fuelType);
    this.numberOfEngine =numberOfEngine;
    this.hasLandingGear = hasLandingGear;
};
Object.setPrototypeOf(AirPlane.prototype,VehicleAre.prototype);
AirPlane.prototype.takeOff = function(){
    console.log("Airplane is taking off");
};

AirPlane.prototype.land = function(){
    if(this.hasLandingGear){
        console.log("Airplane is landing with landing gear");
    }
    else{
        console.log("Airplane is landing without landing gear. Caution!!!")
    }
}

// Vehicle methods are accelerate(), brake(),refuel()


// Car 
const car1 = new MyCar("Toyota","Fortuner",200,"petrol",4,4);
car1.honk();
car1.accelerate();
car1.brake();
car1.cardoors();

console.log("--------------------------------------------------------");
// Plane
const airplane1 = new AirPlane("Boeing", "747", 800, "Jet-A", 4, true);
airplane1.takeOff();
airplane1.accelerate();
airplane1.refuel();
airplane1.land();

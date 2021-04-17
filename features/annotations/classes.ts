class Vehicle {
    /*private drive() : void{
        console.log('chugga chugga')
    }*/
    //color : string;
    constructor(public color: string) {
        //this.color = color;
    }


    protected honk() : void{
        console.log('beep')
    }

}

const vehicle = new Vehicle('Blue')
console.log(vehicle.color)

class Car extends Vehicle{
    constructor(public wheels : number, color : string) {
        super(color)
    }

    drive() {
        console.log('vroom');
    }
    startDrivingProcess () : void {
        this.drive()
        this.honk()
    }
}

const car = new Car(4, 'orang
//car.honk()
//car.startDrivingProcess()

/*
const vehicle = new Vehicle();
vehicle.drive()
vehicle.honk()*/

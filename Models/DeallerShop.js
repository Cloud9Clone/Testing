class DeallerShop {
    constructor(cars) {
        this.cars = cars;
    }

    previewCars() { return this.cars.forEach((car) => { console.log('A car ' + car.brand + ' of model ' + car.model) })}
}
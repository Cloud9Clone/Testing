module.exports = class DeallerShop {
    constructor(cars) {
        this.cars = cars;
    }

    previewCars() {
        console.log('The dealer shop has the following cars: ');
        return this.cars.forEach((car) => { console.log('A car ' + car.brand + ' of model ' + car.model) });
    }
}
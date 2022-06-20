module.exports = class DeallerShopService {
    constructor(deallerShop) {
        this.deallerShop = deallerShop;
    }

    addCar(car) {
            this.deallerShop.cars.push(car);
            console.log('A car ' + car.brand + ' of model ' + car.model + ' has been purchased');
    }

    removeCar() {
            if (this.deallerShop.cars.length > 0) {
                const length = this.deallerShop.cars.length;
                const car = this.deallerShop.cars[length-1];
                this.deallerShop.cars.pop();
                console.log('A car ' + car.brand + ' of model ' + car.model + ' has been sold');
            } else {
                console.log('DealerShop is empty');
            }
    }
}
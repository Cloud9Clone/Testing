class DeallerShopService {
    constructor(deallerShop) {
        this.deallerShop = deallerShop;
    }

    addCar(car) {
        setTimeout((car) => {
            this.deallerShop.cars.push(car);
        }, 2000);
    }

    removeLastCar() {
        setTimeout(() => {
            this.deallerShop.cars.length > 0 ? this.deallerShop.cars.pop() : 'DealerShop is empty';
        }, 2000);
    }
}
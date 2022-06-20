class Car {
    constructor(brand, model) {
        this.brand =  brand;
        this.model = model;
    }

    getBrand() { return this.brand; }
    getModel() { return this.model; }

    getPrice() {
        if(this.brand === 'BMW') {
            return 50000;
        } else {
            return 30000;
        }
    }
}
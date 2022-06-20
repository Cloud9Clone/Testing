const DeallerShopService = require('./Services/DeallerShopService');
const DeallerShop = require('./Models/DeallerShop');
const Car = require('./Models/Car');

const mercedesA = new Car('Mercedes', 'A-Class');
const mercedesB = new Car('Mercedes', 'B-Class');
const mercedesC = new Car('Mercedes', 'C-Class');
const mercedesD = new Car('Mercedes', 'D-Class');
const mercedesE = new Car('Mercedes', 'E-Class');
const mercedesG = new Car('Mercedes', 'G-Class');
const bmw = new Car('BMW', '326');

const cars = [mercedesA, mercedesB, mercedesC, mercedesD, mercedesE];
const deallerShop = new DeallerShop(cars);
const deallerShopService = new DeallerShopService(deallerShop);

console.log('Welcome to the dealer shop \n');

deallerShopService.addCar(bmw);

deallerShopService.removeLastCar();

deallerShop.previewCars();
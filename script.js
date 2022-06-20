const DeallerShop = require('./Models/DeallerShop');
const Car = require('./Models/Car');

const mercedesA = new Car('Mercedes', 'A-Class');
const mercedesB = new Car('Mercedes', 'B-Class');
const mercedesC = new Car('Mercedes', 'C-Class');
const bmw = new Car('BMW', '326');

const cars = [mercedesA, mercedesB, mercedesC];
const deallerShop = new DeallerShop(cars);

console.log('Welcome to the dealer shop \n');

deallerShop.previewCars();
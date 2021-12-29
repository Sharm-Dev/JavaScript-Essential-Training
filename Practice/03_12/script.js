/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Car from "./Car.js";
import Backpack from "./Backpack.js";

const myCar = new Car(
    "Audi",
    5,
    true,
    5,
    "Yes",
    "Gears",
    2000,
    3000
);
const bmCar = new Car("BM", 3, false, 2, "No", "Gears", 8000, 2000);

const myBackPack = new Backpack("Nike", 50, "White", 6, 30, 20, true)

console.log("Car 1 :", myCar);
console.log("Car 2 :", bmCar);
console.log("Backpack :", myBackPack);

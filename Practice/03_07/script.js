/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cupboard = {
    jar: "Sugar",
    packet: "Pasta",
    tin: "Beans",
    tub: {
        chocolate: true,
        sweets: false,
        mints: false,
    },
    tin: {
        snack1: "chocolate",
        snack2: "jaffas",
    },
};

console.log("The cupboard object", cupboard);
console.log("tub", cupboard.tub);
console.log("tin", cupboard.tin.snack1);
console.log("packet:", cupboard["packet"]);

let jarValue = "jar"
console.log("The jar:", cupboard[jarValue])

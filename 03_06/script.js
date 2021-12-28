/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
//Dotnotion
console.log("The pocketNum value", backpack.pocketNum);
console.log("The strapLength Left", backpack.strapLength.left);
//Bracket notation
console.log("The volume", backpack["volume"]);
//Bracket notation, assigning a variable and using the variable in the console.log bracket notation 
let colorQuery = "color";
console.log("The colour value:", backpack[colorQuery]);


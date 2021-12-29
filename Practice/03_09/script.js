/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
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
  lidOpen:false,
  newName: function (named) {
    this.name = named;
  },
  newVolume: function (amount) {
    this.volume = amount;
  },
  newColor: function (pickColor) {
    this.color = pickColor;
  },
  newPocketNum: function (numOfPockets) {
    this.pocketNum = numOfPockets;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};


console.log("Backpack before any name changes", backpack);

backpack.newName("New Backpack");
backpack.newVolume(50);
backpack.newColor("Black");
backpack.newPocketNum(5);
backpack.newStrapLength(20, 60);
backpack.toggleLid(true);


console.log("Backpack after any name changes", backpack);

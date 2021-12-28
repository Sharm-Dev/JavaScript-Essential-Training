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
console.log("The pocketNum value:", backpack.pocketNum);

console.log("lidOpen value:", backpack.lidOpen);
console.log(backpack.toggleLid(true));
console.log("lidOpen value:", backpack.lidOpen);

console.log("straplength left before change:", backpack.strapLength.left);
console.log("straplength right before change:", backpack.strapLength.right);
backpack.newStrapLength(10, 15)
console.log("straplength left after change:", backpack.strapLength.left);
console.log("straplength right after change:", backpack.strapLength.right);

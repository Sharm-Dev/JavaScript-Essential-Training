class Car {
  constructor(
    model,
    doors,
    window,
    seats,
    engine,
    transmisson,
    widthLength,
    heightLength
  ) {
    this.model = model;
    this.doors = doors;
    this.window = window;
    this.seats = seats;
    this.engine = engine;
    this.transmisson = transmisson;
    this.size = {
      width: widthLength,
      height: heightLength,
    };
  }
  newSize(widthLength, heightLength) {
    this.size.width = widthLength;
    this.size.height = heightLength;
  }
}

export default Car;
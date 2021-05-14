const Spaceship = {
  fuel: 400,
  shields: true,
  passengers: ['John', 'Steve', 'Sam', 'Danielle'],
  newPassenger: ['Lindsay'],
  speedometer: 0,
  distance: 0,
  listPassengers: function () {
    for (let i = 0; i < Spaceship.passengers.length; i++)
      console.log('Passenger ' + [i + 1] + ': ' + Spaceship.passengers[i]);
  },
  addPassenger: function (newPassenger) {
    Spaceship.passengers.push(newPassenger);
    console.log('New Passenger on board: ' + newPassenger);
  },
  travel: function (distance) {
    console.log('trying to travel: ' + distance);
    if (Spaceship.fuel == 0) {
      console.log('Can not go further, tank is empty!');
    } else {
      Spaceship.fuel = Spaceship.fuel - (distance / 2);
      if (Spaceship.fuel <= 0) {
        distance = distance - (Spaceship.fuel * (-2));
        console.log('Can only travel: ' + distance);
        Spaceship.fuel = 0;
      }
      if (Spaceship.fuel <= 30 && Spaceship.shields !== false) {
        Spaceship.shields = false;
        console.log('Low fuel, turning off shields!');
      }
      Spaceship.speedometer = Spaceship.speedometer + distance;
      console.log('The Spaceship is at: ' + Spaceship.speedometer);
      console.log('The Spaceship has: ' + Spaceship.fuel + ' fuel');
    }
  }
};
Spaceship.listPassengers();
Spaceship.addPassenger('Lindsay');
Spaceship.listPassengers();
Spaceship.travel(750);
Spaceship.travel(200);
Spaceship.travel(100);
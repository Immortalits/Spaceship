// létrehozzuk a 'Spaceship' objektumot
const Spaceship = {
  // megadjuk a key: value párokat
  fuel: 400,
  shields: true,
  passengers: ['John', 'Steve', 'Sam', 'Danielle'],
  // a függvény hívásakor elég, ha kap value-t
  newPassenger: [''],
  speedometer: 0,
  distance: 0,
  // létrehozzuk a listPassengers function-t
  listPassengers: function () {
    // for-al végigmegyünk az utasokon
    for (let i = 0; i < Spaceship.passengers.length; i++)
      // kiírjuk console-ra, az utasokat külön sorban
      console.log('Passenger ' + [i + 1] + ': ' + Spaceship.passengers[i]);
  },
  // létrehozzuk az addPassenger funkciót, aminek a newPassenger a bemeneti paramétere
  addPassenger: function (newPassenger) {
    // a passengers-be beletesszük (.push) a newPassenger elemeit
    Spaceship.passengers.push(newPassenger);
    // console-ra kiírjuk, hogy új utas: newPassenger
    console.log('New Passenger on board: ' + newPassenger);
  },
  // létrehozzuk a travel funkciót distance bemeneti paraméterrel
  travel: function (distance) {
    // kiírjuk consolre-ra, hogy mennyit próbálunk utazni
    console.log('trying to travel: ' + distance);
    // ha nincs üzemanyag, akkor kiírjuk console-ra, hogy üres a tank
    if (Spaceship.fuel === 0) {
      console.log('Can not go further, tank is empty!');
    } else {
      // ha nem üres a tank, akkor az üzemanyag a távolság velével csökken
      Spaceship.fuel = Spaceship.fuel - (distance / 2);
      // ha nem üres a tank eleve, de az üzemanyag negatívba menne utazáskor (vagy nulla)
      if (Spaceship.fuel <= 0) {
        // akkor a távolság értéke az utazandó távolságból levonva az üzemanyag mínusz kétszerese
        distance = distance - (Spaceship.fuel * (-2));
        // consolre-ra kiírjuk, hogy csak ezt a távolságot tudjuk megtenni
        console.log('Can only travel: ' + distance);
        // az üzemanyag mennyiségét kinullázzuk
        Spaceship.fuel = 0;
      }
      // ha nem üres a tank eleve és 30 alá megy az üzemanyag és a pajzsok nincsenek még kikapcsolva, akkor...
      if (Spaceship.fuel <= 30 && Spaceship.shields !== false) {
        // a pajzsokat kikapcsoljuk
        Spaceship.shields = false;
        // console-ra kiírjuk, hogy a pajzsokat kikapcsoljuk
        console.log('Low fuel, turning off shields!');
      }
      // ha nem üres a tank eleve, akkor a speedometer értékéhez (eddig megtett út) hozzáadjuk a távolságot
      Spaceship.speedometer = Spaceship.speedometer + distance;
      // kiírjuk console-ra az eddig megtett út módosult értékét
      console.log('The Spaceship is at: ' + Spaceship.speedometer);
      // kiírjuk console-ra, hogy mennyi üzemanyag maradt
      console.log('The Spaceship has: ' + Spaceship.fuel + ' fuel');
    }
  }
};

// meghívjuk a listPassengers függvényt
Spaceship.listPassengers();
// meghívjuk az addPassengers függvényt, 'Lindsay' string bemeneti értékkel -> newPassenger: ['Lindsay']
Spaceship.addPassenger('Lindsay');
// megint meghívjuk (a már módosult tartalmú) listPassengers függvényt
Spaceship.listPassengers();
// meghívjuk a travel függvényt 750 bemeneti értékkel -> distance: 750
Spaceship.travel(750);
// stb.
Spaceship.travel(200);
// stb.
Spaceship.travel(100);
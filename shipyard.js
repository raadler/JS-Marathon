//YOUR CODE GOES HERE
// var launchpad;
var launchpad;
var ship;
var crewNames;
var trainCrew;
var crewMembers;
var rocket;
var countdown;

crewNames = ["Jelena", "Rachel", "Ben", "Perry", "Paddy", "Maggie", "Shelly", "Jenn"];



ship = {
  name: "Moonraker",
  crew: [],
  propulsion: null,
  loadCrew: function(array) {
    for(var i = 0; i < array.length; i++) {
      this.crew.push(array[i]);
      console.log((array[i]).name + " has boarded the ship!");
    }
  },
  captain: function() {
    var number = this.crew.length - 1;
    var random_number = Math.floor(Math.random() * number);
    return this.crew[random_number];
  },
  mountPropulsion: function(obj) {
    this.propulsion = obj;
    console.log("Engines were mounted");
  },
  takeoff: function() {
    if(this.propulsion.fire()) {
      console.log("Whoosh");
    } else {
      console.log("Takeoff unsuccessful. Engines failed to fire.");
    }
  },
  fuelShip: function(fuel) {
    this.propulsion.fuel += fuel;
    console.log("the fuel has been increased by " + fuel + " gallon(s)");
  }
};


trainCrew = function(names) {
  var trainedCrew = [];
  for(var i = 0; i < names.length; i++) {
    var crewMember = {
      name: names[i]
    };
    trainedCrew.push(crewMember);
  }
  return trainedCrew;
};

rocket = {
  fuel: 0,
  fire: function() {
    if(this.fuel > 0){
      this.fuel -= 1;
      console.log("Engines have been fired, current fuel: " + this.fuel);
      return true;
    } else {
      console.log("Engines have failed! Not enough fuel.");
      return false;
    }
  }
};

countdown = function(count) {
  if(count === 0) {
    console.log("Blasting off!");
  } else {
    console.log(count);
    countdown(count - 1);
  }
};

crewMembers = trainCrew(crewNames);

launchpad = function(ship, crew, engine) {
  console.log("We are going to space today");
  console.log("The name of our ship is " + ship.name);
  ship.loadCrew(crew);
  console.log("The Captain of this flight is " + ship.captain().name);
  ship.mountPropulsion(rocket);
  ship.fuelShip(5);
  countdown(10);
  ship.takeoff();
};

launchpad(ship, crewMembers, rocket);

// Code your solution in this file
function findMatching(drivers, driverName) {
  return drivers.filter(function (driver) {return driver.toUpperCase() === driverName.toUpperCase()});
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {return driver.name === name});
}

function fuzzyMatch(drivers, startLetters) {
  return drivers.filter(function (driver) {return})
}

// Code your solution in this file
function findMatching(drivers, driverName) {
  return drivers.filter(function (driver) {return driver.toUpperCase() === driverName.toUpperCase()});
}

function matchName (drivers, driverName) {
  return drivers.filter(function (driver) {return driver.name === driverName});
}

function fuzzyMatch(drivers, startLetters) {
  return drivers.filter(function (driver) {return driver[0] === startLetters[0]})
}

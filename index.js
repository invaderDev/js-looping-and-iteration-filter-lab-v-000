// Code your solution in this file
function findMatching(array, driverName) {
  return array.filter(function (string) {return string.toUpperCase() === driverName.toUpperCase()});
}

function matchName (drivers, name) {
  drivers.filter(function (driver) {return driver.name === name});
}

function fuzzyMatch(drivers, startLetters) {
  for (const driver of drivers) {
    for (const letter of driver) {

    }
  }
}

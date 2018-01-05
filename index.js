// Code your solution in this file
function findMatching(array, driverName) {
  return array.filter(function (string) {return string.toUpperCase() === driverName.toUpperCase()});
}

function matchName (drivers, name) {
  let matchingDrivers = [];

  for (const driver of drivers){
    if (driver.name === name) {
      matchingDrivers.push(driver);
    }
  }

  return matchingDrivers;
}

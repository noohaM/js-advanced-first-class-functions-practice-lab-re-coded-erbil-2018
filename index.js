// Code your solution in this file!

const logDriverNames = function(el){
    driverInfo.forEach(function(driver){
       console.log(driver.name)
    })
}

const logDriversByHometown = function(el, hometown){
  driverInfo.forEach(function(driver){
    if (driver.hometown === hometown){
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function(driver){
  const newArray = []
  driver.forEach(function(driver){
    newArray.push(driver)
  })
  newArray.sort(function(a,b){
    return a.revenue - b.revenue
  })
  return newArray
}
const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};
const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};



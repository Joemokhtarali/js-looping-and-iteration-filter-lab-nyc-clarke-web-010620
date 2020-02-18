// Code your solution in this file
function findMatching(array, name) {
    let newArray = array.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return newArray;
}

function fuzzyMatch(array, string) {
    let newArray = array.filter(driver => driver.slice(0,2) === string) ; 
    return newArray;
}

function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }
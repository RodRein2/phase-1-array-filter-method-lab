const driver = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(driversList, searchString){
    const lowercaseSearch = searchString.toLowerCase();
    return driversList.filter(driver => driver.toLowerCase().includes(lowercaseSearch))
}
function fuzzyMatch(driversList, searchString){
    return driversList.filter(driver => 
        driver.toLowerCase().startsWith(searchString.toLowerCase())
    );
}
const matchingDrivers = fuzzyMatch(driver, "Sa");

function matchName(driversList, searchString){
    return driversList.filter(driver =>
        driver.name.toLowerCase() === searchString.toLowerCase());
}
const driverHometowns = matchName(driver, "Bobby")


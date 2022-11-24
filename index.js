// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//returnfirstTwoDrivers()
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)
console.log(returnFirstTwoDrivers(drivers))

//returnLastTwoDrivers()
const returnLastTwoDrivers = (drivers) => drivers.slice(2)
console.log(returnLastTwoDrivers(drivers))

//selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
console.log(selectingDrivers[0])
console.log(selectingDrivers[1])
console.log(selectingDrivers[0](drivers))
console.log(selectingDrivers[1](drivers))

//createFareMultiplier()

function createFareMultiplier(fare = 5){
    const fareQuintupler = () =>  fare * 5
    return fareQuintupler
}
console.log(createFareMultiplier()())

//fareDoubler
const fareDoubler = (createFareMultiplier) => createFareMultiplier * 2
console.log(fareDoubler(10))

//fare tripler
const fareTripler = (createFareMultiplier) => createFareMultiplier * 3
console.log(fareTripler(12))

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}
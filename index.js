const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier =(multiplier) => {
    return function(fare){
       return fare * multiplier
    }
}

const fareDoubler = (fare) => fare * 2

const fareTripler = (fare) => fare * 3

let selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers)
}



// function returnLastTwoDrivers(drivers){
//     drivers.shift('Antonia')
//     drivers.shift('Nuru')
//     return drivers
// }
// // function selectingDrivers(){
// //     returnFirstTwoDrivers();
// // }
// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// // return selectingDrivers[returnFirstTwoDrivers];
// let returnFirstTwoDrivers = selectingDrivers[0](drivers);
// // console.log(returnFirstTwoDrivers);
// let returnLastTwoDrivers = selectingDrivers[1](drivers);
// // console.log(returnLastTwoDrivers);



// function createFareMultiplier(){
//     //if createFareMultiplier receives an argument of 4 it will return a function that will take the fare as an argument
//     //and quadruples the fare
//     return function(){
      
//     }
// }
// function fareDoubler(){
//     //if fareDoubler receives an argument of 4 it will return a function that will take the fare as an argument
//     //and doubles the fare
//     return function(){
      
//     }
// }
// function fareTripler(){

// }

"use strict";
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
const multiple = function (a, b) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
//?*? never
const throwError = (message) => {
    if (!message) {
        throw new Error(message);
    }
};
const forecast = {
    date: new Date(),
    weather: 'sunny',
};
const logWeather = (forecast) => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
//? functionun qebul etdiyi stilin adi destructuring adlanir
//? ondan sonra ise annotation olunur type-lerlar
const logWeatherES2015 = ({ date, weather, }) => {
    console.log(date, weather);
};

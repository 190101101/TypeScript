"use strict";
const profile = {
    name: 'Jack',
    age: 25,
    coordinates: {
        lat: 1,
        long: 20,
    },
    setAge(age) {
        this.age = age;
    },
};
const { age } = profile;
const { coordinates: { lat, long }, } = profile;

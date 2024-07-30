"use strict";
var Car  = /** @class */ (function() {
    function Car(){
        this.color = 'white';
    }
    Car.prototype.drive = function(){
        console.log('car is driving');
    };
    Car.prototype.beep = function(){
        console.log('beeeeep');
    };
    return Car;
})();

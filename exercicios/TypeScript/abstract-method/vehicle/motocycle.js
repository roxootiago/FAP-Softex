"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocycle = void 0;
var Motocycle = /** @class */ (function () {
    function Motocycle(name) {
        this.name = name;
    }
    Motocycle.prototype.pickUp = function (customerName) {
        console.log("".concat(this.name, " est\u00E1 a caminho"));
    };
    Motocycle.prototype.stop = function () {
        console.log("".concat(this.name, " chegou ao destino"));
    };
    return Motocycle;
}());
exports.Motocycle = Motocycle;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Housing = exports.PebScore = void 0;
var PebScore;
(function (PebScore) {
    PebScore[PebScore["A"] = 0] = "A";
    PebScore[PebScore["B"] = 1] = "B";
    PebScore[PebScore["C"] = 2] = "C";
    PebScore[PebScore["D"] = 3] = "D";
    PebScore[PebScore["E"] = 4] = "E";
    PebScore[PebScore["F"] = 5] = "F";
    PebScore[PebScore["G"] = 6] = "G";
})(PebScore || (exports.PebScore = PebScore = {}));
class Housing {
    constructor(caract) {
        this._tenantData = [];
        this._houseCaract = caract;
    }
    get houseCaract() {
        return this._houseCaract;
    }
    get tenantData() {
        return this._tenantData;
    }
    toString() {
        return `house address : ${this._houseCaract.address.street} ${this._houseCaract.address.houseNumber}, ${this._houseCaract.address.postCode} ${this._houseCaract.address.city} | list of person living in : ${this._tenantData}`;
    }
}
exports.Housing = Housing;

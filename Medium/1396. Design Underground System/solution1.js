/**
 * @typedef LastRecord
 * @property {number} time
 * @property {string} startStation
 */

class UndergroundSystem {
    constructor() {
        /** @type {Object.<string, number[]>} */
        this.stationCostTime = {};
        /** @type {LastRecord[]} */
        this.lastRecord = [];
    }

    /** 
     * @param {number} id 
     * @param {string} stationName 
     * @param {number} t
     * @return {void}
     */
    checkIn(id, stationName, t) {
        this.lastRecord[id] = {
            time: t,
            startStation: stationName
        };
    }

    /** 
     * @param {number} id 
     * @param {string} stationName 
     * @param {number} t
     * @return {void}
     */
    checkOut(id, stationName, t) {
        const diff = t - this.lastRecord[id].time;
        const key = `${this.lastRecord[id].startStation}_${stationName}`;

        if(this.stationCostTime[key] === undefined) {
            this.stationCostTime[key] = [];
        }

        this.stationCostTime[key].push(diff);
        delete this.lastRecord[id];
    }

    /** 
     * @param {string} startStation 
     * @param {string} endStation
     * @return {number}
     */
    getAverageTime(startStation, endStation) {
        const key = `${startStation}_${endStation}`;

        return this.stationCostTime[key].reduce((a, b) => a + b, 0) / this.stationCostTime[key].length;
    }
}


// --------------------------
const ugs = new UndergroundSystem();
ugs.checkIn(45, "Leyton", 3);
ugs.checkIn(32, "Paradise", 8);
ugs.checkIn(27, "Leyton", 10);
ugs.checkOut(45, "Waterloo", 15);
ugs.checkOut(27, "Waterloo", 20);
ugs.checkOut(32, "Cambridge", 22);
console.log(ugs.getAverageTime("Paradise", "Cambridge"));
console.log(ugs.getAverageTime("Leyton", "Waterloo"));
ugs.checkIn(10, "Leyton", 24);
console.log(ugs.getAverageTime("Leyton", "Waterloo"));
ugs.checkOut(10, "Waterloo", 38);
console.log(ugs.getAverageTime("Leyton", "Waterloo"));

console.log("----");

const ugs2 = new UndergroundSystem();
ugs2.checkIn(10, "Leyton", 3);
ugs2.checkOut(10, "Paradise", 8);
console.log(ugs2.getAverageTime("Leyton", "Paradise"));
ugs2.checkIn(5, "Leyton", 10);
ugs2.checkOut(5, "Paradise", 16);
console.log(ugs2.getAverageTime("Leyton", "Paradise"));
ugs2.checkIn(2, "Leyton", 21);
ugs2.checkOut(2, "Paradise", 30);
console.log(ugs2.getAverageTime("Leyton", "Paradise"));

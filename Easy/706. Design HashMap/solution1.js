class MyHashMap {
    constructor() {
        this.map = [];
    }

    /**
     * @param {number} key 
     * @param {number} value 
     * @returns {void}
     */
    put(key, value) {
        this.map[key] = value;
    }

    /**
     * @param {number} key 
     * @returns {number}
     */
    get(key) {
        return this.map[key] !== undefined ? this.map[key] : -1;
    }

    /**
     * @param {number} key 
     * @returns {void}
     */
    remove(key) {
        delete this.map[key];
    }
}



// ---------------------------------
const hm = new MyHashMap();
hm.put(1, 1);
hm.put(2, 2);
console.log(hm.get(1));
console.log(hm.get(3));
hm.put(2, 1);
console.log(hm.get(2));
hm.remove(2);
console.log(hm.get(2));

class MyHashSet {
    constructor() {
        this.set = [];
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (this.set.indexOf(key) === -1) {
            this.set.push(key);
        }
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.set.indexOf(key);
        if (index !== -1) {
            this.set.splice(index, 1);
        }
    }

    /** 
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.set.indexOf(key) !== -1;
    }
}


// ---------------------------------------
const hs = new MyHashSet();
hs.add(1);
hs.add(2);
console.log(hs.contains(1));
console.log(hs.contains(3));
hs.add(2);
console.log(hs.contains(2));
hs.remove(2);
console.log(hs.contains(2));
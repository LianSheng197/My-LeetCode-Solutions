class PeekingIterator {
    /**
     * @param {Iterator} iterator
     */
    constructor(iterator) {
        this.itr = iterator;
        this.peekValue = null;
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.peekValue === null) {
            this.peekValue = this.itr.next();
        }

        return this.peekValue;
    }

    /**
     * @return {number}
     */
    next() {
        if(this.peekValue !== null) {
            const temp = this.peekValue;
            this.peekValue = null;
            return temp;
        }

        return this.itr.next();
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.peekValue !== null || this.itr.hasNext();
    }
}

/// ---------------
var Iterator = function (v) {
    data = v;
    index = 0;
};

Iterator.prototype = {
    hasNext: function () {
        return index != data.length;
    },
    next: function () {
        var ret = -100000000;
        if (this.hasNext()) {
            ret = data[index];
            index++;
        }
        return ret;
    }
};

var itr = new Iterator([1, 2, 3]);
var p = new PeekingIterator(itr);
console.log(p.next());
console.log(p.peek());
console.log(p.next());
console.log(p.next());
console.log(p.hasNext());


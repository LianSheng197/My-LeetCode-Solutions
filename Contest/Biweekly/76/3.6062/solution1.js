class ATM {
    constructor() {
        this.bn = [20, 50, 100, 200, 500];
        this.bnc = [0, 0, 0, 0, 0];
    }

    /** 
     * @param {number[]} banknotesCount
     * @return {void}
     */
    deposit(banknotesCount) {
        for (let i = 0; i < banknotesCount.length; i++) {
            this.bnc[i] += banknotesCount[i];
        }
    }

    /** 
     * @param {number} amount
     * @return {number[]}
     */
    withdraw(amount) {
        const temp = [0, 0, 0, 0, 0];

        for (let i = this.bnc.length - 1; i >= 0; i--) {
            if (amount >= this.bn[i]) {
                const diff = Math.min(Math.floor(amount / this.bn[i]), this.bnc[i]);
                temp[i] = diff;
                amount -= diff * this.bn[i];
            }
        }


        if (amount === 0) {
            for (let i = 0; i < this.bnc.length; i++) {
                this.bnc[i] -= temp[i];
            }

            return temp;
        }

        return [-1];
    }
}



// --------------
const atm = new ATM();
atm.deposit([0, 0, 1, 2, 1]);
console.log(atm.withdraw(600));
atm.deposit([0, 1, 0, 1, 1]);
console.log(atm.withdraw(600));
console.log(atm.withdraw(550));

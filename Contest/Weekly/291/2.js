/**
 * @param {number[]} cards
 * @return {number}
 */
const minimumCardPickup = function (cards) {
    let result = Number.MAX_SAFE_INTEGER;
    
    const temp = [];
    for (let i = 0; i < cards.length; i++) {        
        for (let j = i + temp.length; j < cards.length; j++) {
            const c = cards[j];

            if (temp.includes(c)) {
                if(temp.length + 1 < result)  {
                    result = temp.length + 1;
                }

                break;
            } else {
                temp.push(cards[j]);
            }
        }

        if(temp.length + i === cards.length) {
            break;
        }

        temp.shift();
    }

    return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};


// ----------------------
console.log(minimumCardPickup([3, 4, 2, 3, 4, 7]));
console.log(minimumCardPickup([1, 0, 5, 3]));
console.log(minimumCardPickup([70,37,70,41,1,62,71,49,38,50,29,76,29,41,22,66,88,18,85,53]));

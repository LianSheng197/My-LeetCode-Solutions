/**
 * @param {number[]} scores
 * @param {number[][]} edges
 * @return {number}
 */
const maximumScore = function (scores, edges) {
    /** @type {Node[]} */
    const nodes = [];

    class Node {
        constructor(place, val) {
            this.place = place;
            this.val = val;
            this.links = Array(scores.length).fill(null);
        }

        /**
         * @param {number} edgeTarget
         * @param {number} edgeScore
         */
        addLink(edgeTarget, edgeScore) {
            nodes[this.place].links[edgeTarget] = edgeScore;

            for (let i = 0; i < nodes[this.place].links.length; i++) {
                nodes[edgeTarget].links[this.place] = edgeScore;
            }
        }
    }

    // 建立節點
    for (let i = 0; i < scores.length; i++) {
        nodes.push(new Node(i, scores[i]));
    }

    // 建立連線
    for (let i = 0; i < edges.length; i++) {
        nodes[edges[i][0]].addLink(edges[i][1], nodes[edges[i][1]].val)
    }

    return nodes;
};



// ---------
console.log(maximumScore([5, 2, 9, 8, 4], [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]]));
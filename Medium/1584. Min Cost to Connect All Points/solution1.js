class Edge {
    /**
     * @param {number} begin
     * @param {number} end
     * @param {number} weight
     */
    constructor(begin, end, weight) {
        this.begin = begin;
        this.end = end;
        this.weight = weight;
    }
}

/**
 * 找到最源頭的點
 * @param {number[]} parents
 * @param {number} i
 * @returns {number}
 */
const find = function (parents, i) {
    while (parents[i] > 0) {
        i = parents[i];
    }

    return i;
};

/**
 * 使用 Kruskal 演算法實現
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = function (points) {
    /**
     * 先找到所有邊
     */

    /** @type {Edge[]} */
    const edges = [];
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const weight = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);

            edges.push(new Edge(i, j, weight));
        }
    }

    /**
     * 根據邊長（權重）排序
     */
    edges.sort((a, b) => a.weight - b.weight);

    /**
     * 開始嘗試連接
     */

    const pointParents = Array(points.length).fill(0);
    let result = 0;

    for (const edge of edges) {
        const parent1 = find(pointParents, edge.begin);
        const parent2 = find(pointParents, edge.end);

        if (parent1 !== parent2) {
            // 只在最根源的節點不同時（即沒有封閉）才加入
            pointParents[parent1] = parent2;
            result += edge.weight;
        }
    }

    return result;
};


// -------------------------
console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]));
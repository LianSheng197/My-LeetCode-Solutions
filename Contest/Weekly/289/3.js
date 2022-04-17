/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxTrailingZeros = function (grid) {
    // 找尾數 0 的話，可能組合有「偶數*5」、「10」

    /**
     * @param {number} num
     * @returns {number}
     */
    const getTrailingZeros = function (num) {
        return num.toString().match(/[1-9](0*)$/)[1].length;
    };

    /**
     * 搜尋指定出發方向的最大符合值
     * @param {number} sRow 起始列
     * @param {number} sCol 起始欄
     * @param {number} sDirection 起始方向 [0, 1, 2, 3] = {左, 上, 右, 下}
     * @param {number} [product] 初始乘積
     * @param {boolean} [turned] 已經轉彎
     * @returns {number} 回傳尾隨 0 的數量
     */
    const finder = function (sRow, sCol, sDirection, product = 1, turned = false) {
        let result = 0;
        let temp = 0;

        if (turned) {
            // 尋找轉彎後方向
            if (sDirection === 0) {
                // 左
                while (sCol >= 1) {
                    product *= grid[sRow][sCol - 1];
                    temp = getTrailingZeros(product);
                    if (temp > result) {
                        result = temp;
                    }
                    sCol--;
                }
            } else if (sDirection === 1) {
                // 上
                while (sRow >= 1) {
                    product *= grid[sRow - 1][sCol];
                    temp = getTrailingZeros(product);
                    if (temp > result) {
                        result = temp;
                    }
                    sRow--;
                }
            } else if (sDirection === 2) {
                // 右
                while (sCol <= grid[0].length - 2) {
                    product *= grid[sRow][sCol + 1];
                    temp = getTrailingZeros(product);
                    if (temp > result) {
                        result = temp;
                    }
                    sCol++;
                }
            } else {
                // 下
                while (sRow <= grid.length - 2) {
                    product *= grid[sRow + 1][sCol];
                    temp = getTrailingZeros(product);
                    if (temp > result) {
                        result = temp;
                    }
                    sRow++;
                }
            }
        } else {
            // 尋找起始方向
            if (sDirection === 0) {
                // 左
                while (sCol >= 1) {
                    product *= grid[sRow][sCol - 1];
                    for (let d = 0; d < 4; d++) {
                        if (d === sDirection) {
                            // 跟目前行進方向相同
                            continue;
                        }

                        if (d === (sDirection + 2) % 4) {
                            // 不能返回
                            continue;
                        }

                        temp = finder(sRow, sCol - 1, d, product, true);

                        if (temp > result) {
                            result = temp;
                        }
                    }

                    sCol--;
                }

                // 最後再乘即可
                temp = getTrailingZeros(product);
                if (temp > result) {
                    result = temp;
                }
            } else if (sDirection === 1) {
                // 上
                while (sRow >= 1) {
                    product *= grid[sRow - 1][sCol];
                    for (let d = 0; d < 4; d++) {
                        if (d === sDirection) {
                            // 跟目前行進方向相同
                            continue;
                        }

                        if (d === (sDirection + 2) % 4) {
                            // 不能返回
                            continue;
                        }

                        temp = finder(sRow - 1, sCol, d, product, true);

                        if (temp > result) {
                            result = temp;
                        }
                    }

                    sRow--;
                }

                // 最後再乘即可
                temp = getTrailingZeros(product);
                if (temp > result) {
                    result = temp;
                }
            } else if (sDirection === 2) {
                // 右
                while (sCol <= grid[0].length - 2) {
                    product *= grid[sRow][sCol + 1];
                    for (let d = 0; d < 4; d++) {
                        if (d === sDirection) {
                            // 跟目前行進方向相同
                            continue;
                        }

                        if (d === (sDirection + 2) % 4) {
                            // 不能返回
                            continue;
                        }

                        temp = finder(sRow, sCol + 1, d, product, true);

                        if (temp > result) {
                            result = temp;
                        }
                    }

                    sCol++;
                }

                // 最後再乘即可
                temp = getTrailingZeros(product);
                if (temp > result) {
                    result = temp;
                }
            } else {
                // 下
                while (sRow <= grid.length - 2) {
                    product *= grid[sRow + 1][sCol];
                    for (let d = 0; d < 4; d++) {
                        if (d === sDirection) {
                            // 跟目前行進方向相同
                            continue;
                        }

                        if (d === (sDirection + 2) % 4) {
                            // 不能返回
                            continue;
                        }

                        temp = finder(sRow + 1, sCol, d, product, true);

                        if (temp > result) {
                            result = temp;
                        }
                    }

                    sRow++;
                }

                // 最後再乘即可
                temp = getTrailingZeros(product);
                if (temp > result) {
                    result = temp;
                }
            }
        }

        return result;
    };

    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] % 5 === 0) {
                // 只找尾數是 0, 5 作爲起點
                if (j < grid[0].length - 1) {
                    let f = finder(i, j - 1, 0, grid[i][j]);
                    if (f > result) {
                        result = f;
                    }

                }

                if (i < grid.length - 1) {
                    let f = finder(i - 1, j, 1, grid[i][j]);
                    if (f > result) {
                        result = f;
                    }
                }

                if (j > 0) {
                    let f = finder(i, j + 1, 2, grid[i][j]);
                    if (f > result) {
                        result = f;
                    }
                }

                if (i > 0) {
                    let f = finder(i + 1, j, 3, grid[i][j]);
                    if (f > result) {
                        result = f;
                    }
                }
            }
        }
    }

    return result;
};

// --------------
console.log(maxTrailingZeros([[23, 17, 15, 3, 20], [8, 1, 20, 27, 11], [9, 4, 6, 2, 21], [40, 9, 1, 10, 6], [22, 7, 4, 5, 3]]));
console.log(maxTrailingZeros([[4, 3, 2], [7, 6, 1], [8, 8, 8]]));
console.log(maxTrailingZeros([[23, 17, 15, 3, 20], [8, 1, 20, 27, 11], [9, 4, 6, 2, 21], [40, 9, 1, 10, 6], [22, 7, 4, 5, 3]]));
console.log(maxTrailingZeros([[1, 5, 2, 4, 25]]));
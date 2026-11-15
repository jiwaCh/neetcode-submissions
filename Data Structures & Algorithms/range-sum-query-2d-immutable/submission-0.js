class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const pM = []

        for(let j = 0; j < matrix.length; j++){
            pM.push([])
            let rowSum = 0
            for(let i = 0 ; i < matrix[j].length; i++){
                rowSum += matrix[j][i]
                const above = j-1 >= 0 ? pM[j-1][i] : 0
                const total = rowSum + above
                pM[j][i] = total
                // in python cant do [i], we will need to do pM[i].append(total) which in js is just pM[i].push(total)
            }
        }

        this.matrix = pM
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const entier = this.matrix[row2][col2]
        const upper = row1-1 >= 0 ? this.matrix[row1-1][col2] : 0
        const left = col1-1 >= 0 ? this.matrix[row2][col1-1] : 0
        const leftMinus = col1-1 >= 0 && row1 -1 >= 0? this.matrix[row1-1][col1-1] : 0
        const total = entier - upper - (left - leftMinus)

        return total

    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const rotateMatrix = (matrix, derection) => {
    let newMatrix = []
    let newMatrixCell = []

    if (derection === "right") {
        for (let i = 0; i < matrix[0].length; i++) {
            for (let j = matrix.length - 1; j >= 0; j--) {
                newMatrixCell.push(matrix[j][i])
            }
            newMatrix.push(newMatrixCell)
            newMatrixCell = []
        }
    } else if (derection === "left") {
        for (let i = matrix[0].length-1; i >= 0; i--) {
            for (let j = 0; j < matrix.length; j++) {
                newMatrixCell.push(matrix[j][i])
            }
            newMatrix.push(newMatrixCell)
            newMatrixCell = []
        }
    }
    return newMatrix
}

console.log(rotateMatrix([[3,4,2,3],
    [5,0,3,4],
    [3,4,5,9],
    [0,2,3,8]], "right"
    ))
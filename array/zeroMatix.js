const zeroMatix = arr => {
    let zero = []
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                zero.push(i, j)
                zeros.push(zero)
                zero = []
            }
        }
    }

    for (let m = 0; m < zeros.length; m++) {
        let row = zeros[m][0],
            column = zeros[m][1]
        for (let x = 0; x < arr[row].length; x++) {
            arr[row][x] = 0
        }

        for (let y = 0; y < arr.length; y++) {
            arr[y][column] = 0
        }
    }

    return arr
}

console.log(zeroMatix([[3,4,2,3],
    [5,0,3,4],
    [3,4,5,9],
    [0,2,3,8]]))
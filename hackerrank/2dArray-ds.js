// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function hourglassSum(arr) {
    let i = 0,
        row1 = 0,
        row2 = 1,
        row3 = 2,
        col1 = 0,
        col2 = 1,
        col3 = 2,
        result = 0

    while (i < 16) {
        let a = arr[row1][col1],
            b = arr[row1][col2],
            c = arr[row1][col3],
            d = arr[row2][col2],
            e = arr[row3][col1],
            f = arr[row3][col2],
            g = arr[row3][col3]

        if (i === 0) {
            result = sum(a,b,c,d,e,f,g)
            col1++
            col2++
            col3++
        } else {
            result = Math.max(result, sum(a,b,c,d,e,f,g))
            if (col3 === 5) {
                col1 = 0
                col2 = 1
                col3 = 2
                row1++
                row2++
                row3++
            } else {
                col1++
                col2++
                col3++
            }
        }
        i++
    }
    return result

}

function sum(a,b,c,d,e,f,g) {
    return a+b+c+d+e+f+g
}
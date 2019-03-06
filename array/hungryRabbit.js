/*A very hungry rabbit is placed in the center of of a garden, represented by a rectangular N x M 2D matrix.
The values of the matrix will represent numbers of carrots available to the rabbit in each square of the garden. 
If the garden does not have an exact center, the rabbit should start in the square closest to the center with the highest carrot count.

On a given turn, the rabbit will eat the carrots available on the square that it is on, and then move up, down, left, or right, 
choosing the the square that has the most carrots. If there are no carrots left on any of the adjacent squares, the rabbit will go to sleep. 
You may assume that the rabbit will never have to choose between two squares with the same number of carrots.

Write a function which takes a garden matrix and returns the number of carrots the rabbit eats. 
You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non-negative integers. For example,

[[5, 7, 8, 6, 3],
 [0, 0, 7, 0, 4],
 [4, 6, 3, 4, 9],
 [3, 1, 0, 5, 8]]
Should return

27 */

// The rabbit will be placed on the 3 in the 3rd array and the 2nd index. Should move up to 7, up another to 8, left to 7, left to 5. = 27

// here is the matrix:
// matrix = [[5, 7, 8, 6, 3],
//           [0, 0, 7, 0, 4],
//           [4, 6, 3, 4, 9],
//           [3, 1, 0, 5, 8]];


const hungryRabbit = matrix => {
    let result = 0
    let a = matrix.length,
        b = matrix[0].length,
        rabbitSpot = rabbitPosition(matrix),
        rabbitSpotA = rabbitSpot[0],
        rabbitSpotB = rabbitSpot[1],
        rabbit = matrix[rabbitSpotA][rabbitSpotB]
    
    result += rabbit
    matrix[rabbitSpotA][rabbitSpotB] = 0

    const somename = (rabbitSpotA, rabbitSpotB) => {
        let topA = rabbitSpotA-1,
            topB = rabbitSpotB,
            downA = rabbitSpotA+1,
            downB = rabbitSpotB,
            leftA = rabbitSpotA,
            leftB = rabbitSpotB-1,
            rightA = rabbitSpotA,
            rightB = rabbitSpotB+1,
            tempA = 0,
            tempB = 0,
            temp = 0

        if (checkRange(topA, topB, a, b, matrix)) {
            if (temp < matrix[topA][topB]) {
                temp = matrix[topA][topB]
                tempA = topA
                tempB = topB
            }
        }

        if (checkRange(downA, downB, a, b, matrix)) {
            if (temp < matrix[downA][downB]) {
                temp = matrix[downA][downB]
                tempA = downA
                tempB = downB
            }
        }

        if (checkRange(leftA, leftB, a, b, matrix)) {
            if (temp < matrix[leftA][leftB]) {
                temp = matrix[leftA][leftB]
                tempA = leftA
                tempB = leftB
            }
        }

        if (checkRange(rightA, rightB, a, b, matrix)) {
            if (temp < matrix[rightA][rightB]) {
                temp = matrix[rightA][rightB]
                tempA = rightA
                tempB = rightB
            }
        }

        if (!checkRange(topA, topB, a, b, matrix) && 
            !checkRange(downA, downB, a, b, matrix) && 
            !checkRange(leftA, leftB, a, b, matrix) && 
            !checkRange(rightA, rightB, a, b, matrix)) {
                return
        }

        rabbit = temp
        rabbitSpotA = tempA
        rabbitSpotB = tempB
        result += rabbit
        matrix[rabbitSpotA][rabbitSpotB] = 0

        somename(rabbitSpotA, rabbitSpotB)
    }

    somename(rabbitSpotA, rabbitSpotB)
    return result
}



const rabbitPosition = matrix => {
    const n = matrix.length,
          m = matrix[0].length
    let   a = 0,
          b = 0

    if (n/2 % 2 !== 0 && m/2 % 2 !== 0) { //n & m both odd
        a = Math.floor(n/2)
        b = Math.floor(m/2)
    } else if (n/2 % 2 !== 0 && m/2 % 2 === 0) { //n odd m even
        a = Math.floor(n/2)
        let tempB1 = m/2,
            tempB2 = m/2 - 1
        
        if (matrix[a][tempB1] > matrix[a][tempB2]) { 
            b = tempB1
        } else {
            b = tempB2
        }
    } else if (n/2 % 2 === 0 && m/2 % 2 !== 0) { //n even m odd
        b = Math.floor(m/2)
        let tempA1 = n/2,
            tempA2 = n/2 - 1
        
        if (matrix[tempA1][b] > matrix[tempA2][b]) {
            a = tempA1
        } else {
            a = tempA2
        }
    } else { //n & m both even
        let tempa1 = n/2,
            tempa2 = n/2 - 1,
            tempb1 = m/2,
            tempb2 = m/2 - 1
        
        let tempP1 = matrix[tempa1][tempb1],
            tempP2 = matrix[tempa1][tempb2],
            tempP3 = matrix[tempa2][tempb1],
            tempP4 = matrix[tempa2][tempb2],
            max = Math.max(tempP1, tempP2, tempP3, tempP4)
        
        if (max === tempP1) {
            a = tempa1
            b = tempb1
        } else if (max === tempP2) {
            a = tempa1
            b = tempb2
        } else if (max === tempP3) {
            a = tempa2
            b = tempb1
        } else {
            a = tempa2
            b = tempb2
        }
    }
    return [a,b]
}

const checkRange = (spotA, spotB, a, b, matrix) => {
    if (spotA >= 0 && spotA < a && spotB >= 0 && spotB < b && matrix[spotA][spotB] > 0) {
        return true
    } else {
        return false
    }
}




console.log(hungryRabbit(
    [[5, 7, 8, 6, 3],
    [0, 0, 7, 0, 4],
    [4, 6, 3, 4, 9],
    [3, 1, 0, 5, 8]]
))

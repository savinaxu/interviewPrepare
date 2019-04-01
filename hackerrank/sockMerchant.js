// John works at a clothing store. 
//He has a large pile of socks that he must pair by color for sale. 
//Given an array of integers representing the color of each sock, 
//determine how many pairs of socks with matching colors there are.

// For example, 
//there are n = 7 socks with colors ar = [1,2,1,2,1,3,2]. 
//There is one pair of color 1 and one of color 2. 
//There are three odd socks left, one of each color. The number of pairs is 2.

// function sockMerchant(n, ar) {
//     const sorted = ar.sort((a, b) => a - b)
//     console.log(sorted)
//     let result = 0,
//         i = 0
    
//     while (i < sorted.length) {
//         result += Math.ceil((sorted.lastIndexOf(sorted[i]) - sorted.indexOf(sorted[i])) / 2)
//         i = sorted.lastIndexOf(sorted[i]) + 1
//     }
//     return result
// }

function sockMerchant(n, ar) {
    let hash = {}
    for(let i = 0; i < ar.length; i++) {
        if (hash[ar[i]]) {
            hash[ar[i]]++
        } else {
            hash[ar[i]] = 1
        }
    }

    let result = 0
    for (let key in hash) {
        result += Math.floor(hash[key] / 2)
    }

    return result
}

console.log(sockMerchant(7, [1,2,1,2,1,3,2]))
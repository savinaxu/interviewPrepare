//look into understand what is ascii vs unicode string

//isUnique1: time: O(n^2), space: O(1)
const isUnique1 = str => {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false
    }
    return true
}


//isUnique2: space: O(n), time: O(n)
const isUnique2 = str => {
    let arr = str.split("")
    let setArr = new Set(arr)
    if (setArr.size === arr.length) {
        return true
    } else {
        return false
    }

}

//isUnique3: time: O(NlogN)
const isUnique3 = str => {
    let arr = str.split("")
    //time: O(NlogN)
    let sortedArr = arr.sort()

    let i = 0,
        j = 1
    
    while (i < sortedArr.length && j < sortedArr.length) {
        if (sortedArr[i] === sortedArr[j]) return false
        i++
        j++
    }
    return true
}

//new learning:
// array => set : time complexity: O(n)

console.log(isUnique3("aaaaaaaaaaaaaaaaaaa"))
console.log(isUnique3("aaaaaaaaaaaabaaaaaa"))
console.log(isUnique3("abcdefghijklmnopqrst"))
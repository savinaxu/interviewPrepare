//permutation: any order of letters in string format
const check = (str1, str2) => {
    const arr1 = str1.split("")
    const arr2 = str2.split("")
    const sortedArr1 = arr1.sort()
    const sortedArr2 = arr2.sort()
    const sortedStr1 = sortedArr1.join("")
    const sortedStr2 = sortedArr2.join("")

    return sortedStr2 === sortedStr1 ? true: false
}


console.log(check('asd','dsa'))

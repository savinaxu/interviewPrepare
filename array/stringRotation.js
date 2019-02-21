//new learning:
// to check str2 is offset of str1 e.g str1 = "applebanana" str 2 = "lebananaapp" 
// make a new str = str1 + str1 = "applebananaapplebanana" contains str 2

const isSubstring = (str1, str2) => {
    const str = str1+str1
    return str.includes(str2)
}

const stringRotation = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    } else {
        return isSubstring(str1, str2)
    }
}

console.log(stringRotation("waterbottle","erbottlewat"))
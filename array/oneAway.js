const oneAway = (str1, str2) => {
    
    let char = "",
        len1 = str1.length,
        len2 = str2.length,
        maxLen = Math.max(len1, len2)

    if (Math.abs(len1-len2) > 1) return false

    //insert
    for (let i = 0, j = 0; i < maxLen, j < maxLen; i++, j++) {
        if (str1[i] !== str2[j]) {
            if (len1 > len2) {
                char += str1[i]
                j--
            } else if (len1 < len2) {
                char += str2[j]
                i--
            } else {
                char += str1[i]
            }
        }
    }
    if (char.length === 1) {
        return true
    } else {
        return false
    }
}

console.log(oneAway("pal", "pale"))
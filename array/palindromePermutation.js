const palindromePermutation = str => {
    const arr = str.toLowerCase().split("").sort()
    let single = 0,
        hash = {}
    
    arr.forEach(el => {
        if (hash[el]) {
            hash[el]++
        } else {
            hash[el] = 1
        }
    })

    for (let key in hash) {
        if (hash[key] % 2 !== 0 && key !== " ") {
            single++
        }
    }

    return single > 1 ? false : true
    
}

console.log(palindromePermutation("Tact Coa"))
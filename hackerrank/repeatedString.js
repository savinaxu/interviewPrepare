//Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

//Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

//For example, 
//if the string s="abcac" and n=10, 
//the substring we consider is abcacabcac, 
//the first 10 characters of her infinite string. 
//There are 4 occurrences of a in the substring.

function repeatedString(s, n) {
    const length = s.length
    const times = Math.floor(n/length)
    const remain = n - times * length

    let as = 0
    for (let j = 0; j < s.length; j++) {
        if (s[j] === "a") {
            as++
        }
    }

    as *= times

    for (let i = 0; i < remain; i++) {
        if (s[i] === "a") {
            as++
        }
    }

    return as



}
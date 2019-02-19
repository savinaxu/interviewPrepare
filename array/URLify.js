const URLify = (str, int) => {
    const trueStr = str.slice(0, int)
    const trimedStr = trueStr.trim().split(" ").join("%20")
    return trimedStr
}

console.log(URLify("Mr John Smith       ",12))
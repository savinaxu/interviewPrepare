const stringCompression = str => {
    const arr = str.split("")
    let holder = [],
        indiHolder = [],
        count = 1,
        result = ""

    for (let i = 0, j = 1; i < arr.length, j < arr.length; i++, j++) {
        if (arr[i] === arr[j]) {
            if (j === arr.length -1) {
                count++
                indiHolder.push(count)
                holder.push(indiHolder)
                break
            }
            if (indiHolder.includes(arr[i])) {
                count++

            } else {
                indiHolder.push(arr[j])
                count++

            }
        } else {
            if (indiHolder.length > 0) {
                indiHolder.push(count)
                holder.push(indiHolder)

                indiHolder = []
                count = 1
                indiHolder.push(arr[j])

                if (j === arr.length -1) {
                    indiHolder.push(count)
                    holder.push(indiHolder)
                }

            } else {
                indiHolder.push(arr[i], 1)
                holder.push(indiHolder)
                indiHolder = []
                count = 1
                indiHolder.push(arr[j])
            }
        }
    }

    for (let m = 0; m < holder.length; m++) {
        result += holder[m][0] + holder[m][1]
    }

    return result.length < str.length ? result : str
}


const stringCompression1 = str => {
    let result = str[0],
        count = 1

    for (let i = 0, j = i+1; i < str.length, j < str.length; i++, j++) {
        if (str[i] === str[j]) {
            count++
            if (j === str.length - 1) {
                result += count
            }
        } else {
            result += count + str[j]
            count = 1
            if (j === str.length - 1) {
                result += count
            }
        }
    }

    return result.length < str.length ? result : str

}
console.log(stringCompression1("aabcccccaaaA"))

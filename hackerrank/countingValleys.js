//Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. 
//During his last hike he took exactly n steps. 
//For every step he took, he noted if it was an uphill, U , or a downhill, D step. 
//Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. 
//We define the following terms:

//A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
//A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
//Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

//For example, 
//if Gary's path is s = [DDUUUUDD] , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. 
//Finally, he returns to sea level and ends his hike.

function countingValleys(n, s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "U") {
            arr.push(1)
        } else {
            arr.push(-1)
        }
    }
    console.log(arr)

    let altitude = 0
    let places = [0]
    for (let i = 0; i < arr.length; i++) {
        altitude += arr[i]
        console.log(altitude)
        if (altitude > 0 && places[places.length-1] === 0) {
            places.push(1)
        } else if (altitude < 0 && places[places.length-1] === 0) {
            places.push(-1)
        } else if (altitude === 0) {
            places.push(0)
        }
        console.log(places)
    }

    return places.filter(num => num < 0).length
}

console.log(countingValleys(8, "DDUUDDUDUUUD"))
const carMarkers: string[] = ['ford', 'toyota', 'cheby']
const dates = [new Date(), new Date()]

//const carsByMake : string[][];
const carsByMake : string[][] = []

const car = carMarkers[0]
const myCar = carMarkers.pop()
// help with inference when extracting values

// Prevent incompatible values
//carMarkers.push(100)

// Help wit 'map'

carMarkers.map((car : string) => {
    // helper shows as all method which available with string type
    return car.toString();
})

const importanDates: (Date | string)[] = [new Date(), '2020-10-10'];
importanDates.push(new Date())
importanDates.push('2020-10-10')
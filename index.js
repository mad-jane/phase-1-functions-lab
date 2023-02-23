function distanceFromHqInBlocks(blocks) {
    return Math.abs(42 - blocks)
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264
}

const distanceTravelledInFeet = (pickup, dropoff) => {
    return Math.abs(pickup - dropoff) * 264
}

const calculatesFarePrice = (start, destination) => {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
        return (feet - 400) * .02
    } else if (feet >= 2000 && feet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
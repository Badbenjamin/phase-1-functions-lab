// Code your solution in this file!
const hqStreet =  42;

function distanceFromHqInBlocks (street) {
    return Math.abs(hqStreet - street);
}

function distanceFromHqInFeet(street) {
    return (distanceFromHqInBlocks(street) * 264)
}

function distanceTravelledInFeet(start, end) {
    return (Math.abs(start - end) * 264);
}

function calculatesFarePrice(start, end) {
    let distance = (Math.abs(start - end) * 264);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(42, 50));
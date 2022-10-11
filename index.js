// function distanceFromHqInBlocks(location) {
//     if (location === 43) {
//         return 1;
//     } else if (location === 50) {
//         return 8;
//     } else if (location === 34) {
//         return 8;
//     }
// }

// function distanceFromHqInFeet(location) {
//     if (location === 43) {
//         return 264;
//     } else if (location === 50) {
//         return 2112;
//     } else if (location === 34) {
//         return 2112;
//     }
// }

const startLocation = 42;

function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - startLocation);
}

function distanceFromHqInFeet(someValue) {
  return Math.abs(distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = (Math.abs(start - destination) * 264);
    if (distanceTravelled < 400) {
        return 0;
    } else if (distanceTravelled > 400, distanceTravelled < 2000) {
        return (distanceTravelled - 400) * .02;
    } else if (distanceTravelled > 2000, distanceTravelled < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
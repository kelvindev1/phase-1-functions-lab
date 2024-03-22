function distanceFromHqInBlocks(start) {
    return Math.abs(42 - start);
}
function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination)*264;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
function calculatesFarePrice(start, destination) {
  const distanceInFeet = Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
  if (distanceInFeet > 2500) {
    return 'cannot travel that far';
  } else if (distanceInFeet > 2000) {
    return 25;
  }else if (distanceInFeet >= 400) {
    return (distanceInFeet - 400 ) * 0.02 * 1;
  } else {
    return 0;
  }
}
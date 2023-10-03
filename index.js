// Code your solution in this file!
function distanceFromHqInBlocks(blockdistance) {
    return Math.abs(blockdistance-42);
 }
  let distanceInblocks = distanceFromHqInBlocks(43)
  console.log(distanceInblocks)

function distanceFromHqInFeet(blockdistance) {
    let feetaway = distanceFromHqInBlocks(blockdistance)
    return feetaway*264

  }
function distanceTravelledInFeet(start, destination) {
    let distanceDifference = Math.abs(start-destination)
    return distanceDifference*264;
  }
  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start,destination);
    if (feetTravelled <= 400) {
      return 0; 
    } else if (feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02; 
    } else if (feetTravelled <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far';
    }
  }
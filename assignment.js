function feetToMile(foot) {
  var mile = foot * 0.000189394;
  return mile;
}

function woodCalculator(chair, table, bed) {
  var sum = 0;

  sum = chair * 1 + table * 3 + bed * 5;

  return sum;
}

function brickCalculator(floor) {
  if (floor <= 10) {
    var sum = floor * 15 * 1000;
    return sum;
  } else if (floor > 10 && floor <= 20) {
    var extraFloor = floor - 10;
    var sum = 10 * 15 * 1000;

    sum = sum + extraFloor * 12 * 1000;

    return sum;
  } else if (floor > 20) {
    var extraFloor = floor - 20;
    var sum = 10 * 15 * 1000;
    sum = sum + 10 * 12 * 1000;
    sum = sum + extraFloor * 10 * 1000;

    return sum;
  }
}

function tinyFriend(friendsName) {
  var newArray = [];
  for (i = 0; i < friendsName.length; i++) {
    newArray.push(friendsName[i].length);
  }

  var small = Math.min(...newArray);
  for (i = 0; i < friendsName.length; i++) {
    if (friendsName[i].length == small) {
      return friendsName[i];
    }
  }
}


function isEmpty(obj) {
  let testingSum = 0;
  for (let key in obj) {
    testingSum++;
  }
  if (testingSum == 1) {
    return false;
  } else {
    return true;
  }
}
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

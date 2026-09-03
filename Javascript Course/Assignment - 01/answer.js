//Question 1
function describeValue(v) {
  let x = typeof v;
  if (v) {
    return `${x} | truthy`;
  } else {
    return `${x} | falsy`;
  }
}

//Question 2
function getDayType(d) {
  let day = d.toLowerCase();
  switch (day) {
    case "friday":
      return "Weekend";
    case "saturday":
      return "Weekend";
    case "sunday":
      return "Working Day";
    case "monday":
      return "Working Day";
    case "tuesday":
      return "Working Day";
    case "wednesday":
      return "Working Day";
    case "thursday":
    default:
      return "Invalid Day";
  }
}

//Question 3
function validateUsername(username) {
  let uname = username.toLowerCase();
  if (username.length < 4) {
    return "Too Short";
  } else if (username.includes(" ")) {
    return "No Space Allowed";
  } else if (uname.includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}

//Question 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 0;
  if (distance <= 2) {
    fare = 50;
  } else {
    fare = 50 + (distance - 2) * 15;
  }
  fare += waitingMinutes * 2;

  if (isNight) {
    fare += fare * 0.2;
  }
  return fare;
}

//Question 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  let runsNeeded = target - scored;
  let verdict = "";
  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  } else {
    let requiredRate = (runsNeeded / ballsLeft) * 6;
    if (requiredRate <= 6) {
      verdict = "Comfortable";
    } else if (requiredRate > 6 && requiredRate <= 12) {
      verdict = "Tough";
    } else if (requiredRate > 12) {
      verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
  }
};

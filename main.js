//Get today's date
date = new Date();
//Make list of days for later use
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Get the name of the day of the week
const currentDayOfWeek = daysOfWeek[date.getDay()];
//Update all days to be current and the next 4 days
document.getElementById("one").innerHTML = currentDayOfWeek.substring(0,3);
document.getElementById("two").innerHTML = daysOfWeek[(daysOfWeek.indexOf(currentDayOfWeek)+1)%7].substring(0,3);
document.getElementById("three").innerHTML = daysOfWeek[(daysOfWeek.indexOf(currentDayOfWeek)+2)%7].substring(0,3);
document.getElementById("four").innerHTML = daysOfWeek[(daysOfWeek.indexOf(currentDayOfWeek)+3)%7].substring(0,3);
document.getElementById("five").innerHTML = daysOfWeek[(daysOfWeek.indexOf(currentDayOfWeek)+4)%7].substring(0,3);

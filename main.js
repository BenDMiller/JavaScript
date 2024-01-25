date = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayOfWeek = daysOfWeek[date.getDay()];
document.getElementById("one").innerHTML = currentDayOfWeek.substring(0,3);
document.getElementById("two").innerHTML = daysOfWeek[(daysOfWeek.indexOf(currentDayOfWeek)+1)%7].substring(0,3);
document.getElementById("three").innerHTML = daysOfWeek[(daysOfWeek.indexOf(currentDayOfWeek)+2)%7].substring(0,3);
document.getElementById("four").innerHTML = daysOfWeek[(daysOfWeek.indexOf(currentDayOfWeek)+3)%7].substring(0,3);
document.getElementById("five").innerHTML = daysOfWeek[(daysOfWeek.indexOf(currentDayOfWeek)+4)%7].substring(0,3);

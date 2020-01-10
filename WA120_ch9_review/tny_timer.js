"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Kofi   
   Date: 12/18/19  

*/

// Execute the function showClock

showClock();
setInterval("showClock()", 1000);
function showClock() {
    // Store curent date and time 
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();

     // Display current date and time 
   document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";
   // Calculate the date of the next July 4th 
    var j4Date = nextJuly4(thisDay);
    j4Date.setHours(21);  //Set the new j4Date value to 9pm

    // Calculate the days, hours, minutes, and seconds until next July 4th 
    var days = (j4Date - thisDay)/(1000*60*60*24);
    var hrs = (days - Math.floor(days))*24;
    var mins = (hrs - Math.floor(hrs))*60;
    var secs = (mins - Math.floor(mins))*60;

    //Display the time left until the next July 4th 
    document.getElementById('dLeft').textContent = Math.floor(days);
    document.getElementById('hLeft').textContent = Math.floor(hrs);
    document.getElementById('mLeft').textContent = Math.floor(mins);
    document.getElementById('sLeft').textContent = Math.floor(secs);
}


function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
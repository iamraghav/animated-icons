// Thumb's up animation <---
function thumbsUp() {
  let thumbs = document.getElementById('thumbs');
  thumbs.innerHTML = "&#xf0a4;";

  setTimeout(function() {
    thumbs.innerHTML = "&#xf087;";
  }, 1000);
}

// Call animation
thumbsUp();

// Animate every 2 seconds
setInterval(thumbsUp, 2000);

// Thumb's up animation ends here --->


// Break Chain animation <---
function breakChain() {
  let chain = document.getElementById('chain');
  chain.innerHTML = "&#xf0c1;";

  setTimeout(function() {
    chain.innerHTML = "&#xf127;";
  }, 1000);
}

// Call animation
breakChain();

// Animate every 2 seconds
setInterval(breakChain, 2000);

// Break Chain animation ends here --->

// Battery charge animation <---
function chargeBattery() {
  let battery = document.getElementById('battery');
  battery.innerHTML = "&#xf244;";

  setTimeout(function() {
    battery.innerHTML = "&#xf243;";
  }, 1000);
  setTimeout(function() {
    battery.innerHTML = "&#xf242;";
  }, 2000);
  setTimeout(function() {
    battery.innerHTML = "&#xf241;";
  }, 3000);
  setTimeout(function() {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}

// Call animation
chargeBattery();

// Animate every 5 seconds
setInterval(chargeBattery, 5000);

// Battery charge animation ends here --->

//Hourglass tip animation starts here <---
function hourglassTip() {
  let hourglass = document.getElementById('hourglass');
  hourglass.innerHTML = "&#xf251;";

  setTimeout(function() {
    hourglass.innerHTML = "&#xf252;";
  }, 1000);

  setTimeout(function() {
    hourglass.innerHTML = "&#xf253;";
  }, 2000);
}

//Call animation
hourglassTip();

// Animate every 3 seconds
setInterval(hourglassTip, 3000);

//Hourglass tip animation starts here --->

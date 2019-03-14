const button = document.querySelector('.button');
// MUPPET TROLL POPS OUT OF BUTTON ON CLICK
button.addEventListener('click', event => {
  // button.innerHTML = `Click count: ${event.detail}`;
  event.target.style.backgroundColor = "#55BCC9";
  button.innerHTML = '<img src="http://persephonemagazine.com/wp-content/uploads/2014/10/muppets.jpg"/ class="oldtroll">';
});

// <!-- ARRAY METHOD joins array elements into a string-->
// 404 ERROR ON INFINITE TROLL PAGE
var fruits = ["404", "ERROR", "PAGE"];
document.getElementById("demo").innerHTML = fruits.join(" ");
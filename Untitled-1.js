const button = document.querySelector('.button');

button.addEventListener('click', event => {
  // button.innerHTML = `Click count: ${event.detail}`;
  event.target.style.backgroundColor = "#55BCC9";
  button.innerHTML = '<img src="http://persephonemagazine.com/wp-content/uploads/2014/10/muppets.jpg"/ class="oldtroll">';
});

var fruits = ["Banana", "Orange", "g", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" ");
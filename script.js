console.log("ForceShield");

let businessName = "ForceShield";

let greeting = document.getElementById("welcomeMsg");
console.log(greeting);

function showGreeting() {
  greeting.textContent = "Welcome to " + businessName + "!";

document.getElementById("myButton").addEventListener("click", showGreeting);

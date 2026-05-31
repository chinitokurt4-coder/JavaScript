console.log("ForceShield");

let businessName = "ForceShield";

function showGreeting() {
  let greeting = document.getElementById("welcomeMsg");
  greeting.textContent = "Welcome to " + businessName + "!";
}

document.getElementById("myButton").addEventListener("click", showGreeting);

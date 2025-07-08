// events.js

// Function to register for the event
function registerForEvent() {
    const userName = prompt("Please enter your name to register:");

    if (userName) {
        alert(`Thank you, ${userName}! You have successfully registered for the event.`);
        logRegistration(userName);
    } else {
        alert("Registration cancelled. Please try again.");
    }
}

// Function to log registration details (simulation)
function logRegistration(userName) {
    console.log(`${userName} registered for the event on ${new Date().toLocaleString()}`);
}

// Function to update event countdown
function updateCountdown(eventDate) {
    const countdownElement = document.getElementById("countdown");
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        countdownElement.textContent = "The event has started!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s left`;
}

// Initialize countdown
const eventDate = new Date("2024-12-31T00:00:00").getTime(); // Replace with your event date
const countdownInterval = setInterval(() => updateCountdown(eventDate), 1000);

// Attach event listener to the button
document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.querySelector("button");
    if (registerButton) {
        registerButton.addEventListener("click", registerForEvent);
    }
});

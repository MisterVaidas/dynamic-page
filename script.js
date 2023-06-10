// Declare an objects with a images links, for the different cities
let cityImages = {
    london: 'london.jpeg',
    paris: 'Paris.jpeg',
    newYork: 'NewYork.jpg'
};

// Declare a global variable to store the user's name.
let userName;

// Add an event listener to the "startButton" button that displays the name input modal when clicked.
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("nameModal").style.display = "block";
});

// Add an event listener to the "submitName" button that stores the user's name when clicked,
// displays a welcome message, and shows the number input modal.
document.getElementById("submitName").addEventListener("click", function() {
    // Get the user's name from the input field and assign it to the userName variable.
    userName = document.getElementById("nameInput").value;
    // Check if the user has entered a name.
    if (userName != null && userName != '') {
        // If so, display a personalized welcome message.
        document.getElementById("header").innerHTML = "Welcome, " + userName + "! Let's begin!";
        // Hide the name input modal and show the number input modal.
        document.getElementById("nameModal").style.display = "none";
        document.getElementById("numberDiv").style.display = "block";
    } else {
        // If not, alert the user to enter their name.
        alert("Please enter your name."); 
    }
});

// Add an event listener to the "submitNumber" button that validates the user's number when clicked,
// displays a success message if valid, and shows the continue modal.
document.getElementById("submitNumber").addEventListener("click", function() {
    // Get the user's number from the input field.
    let number = document.getElementById("numberInput").value;

    // Check if the user has entered a valid number.
    if (number >= 1 && number <= 10) {
        // If so, hide the number input modal, display a success message, and show the continue modal.
        document.getElementById("numberDiv").style.display = "none";
        document.getElementById("continueDiv").style.display = "block";
        document.getElementById("numberSuccess").style.display = "block";
        document.getElementById("numberSuccess").innerHTML = "Congratulations! You entered a valid number.";
    } else {
        // If not, alert the user to enter a valid number.
        alert("Please enter a valid number between 1 and 10."); // Consider replacing this with a user-friendly error message within the modal
    }
});

// Add an event listener to the "yesButton" button that displays the city choice modal when clicked.
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("continueDiv").style.display = "none";
    document.getElementById("cityChoiceDiv").style.display = "block";
});

// Add an event listener to the "noButton" button that resets the page when clicked.
document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("header").innerHTML = "Hello, World!";
    document.getElementById("continueDiv").style.display = "none";
    document.getElementById("numberSuccess").style.display = "none";
});

// Add an event listener to the "submitCity" button that displays an image of the chosen city when clicked.
document.getElementById("submitCity").addEventListener("click", function() {
    // Get the user's city choice from the select field.
    let city = document.getElementById("citySelect").value;
    // Check if the user has selected a city.
    if (city != '') {
        // If so, display an image of the chosen city and the "Finish" button.
        document.getElementById("cityImage").src = cityImages[city];
        document.getElementById("cityImage").style.display = "block";
        document.getElementById("finishButton").style.display = "block";
    } else {
        alert("Please select a city."); 
    }
});

// Add an event listener to the "finishButton" button that displays a personalized end message and resets the page when clicked.
document.getElementById("finishButton").addEventListener("click", function() {
    // Display a personalized end message using the user's name.
    document.getElementById("header").innerHTML = "Hope you liked it, " + userName + "!";
    // Hide all modals, images, and buttons except the "Start" button.
    document.getElementById("nameModal").style.display = "none";
    document.getElementById("numberDiv").style.display = "none";
    document.getElementById("continueDiv").style.display = "none";
    document.getElementById("cityChoiceDiv").style.display = "none";
    document.getElementById("cityImage").style.display = "none";
    document.getElementById("finishButton").style.display = "none";
    document.getElementById("startButton").style.display = "block";
});
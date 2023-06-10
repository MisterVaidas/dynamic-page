let cityImages = {
    london: 'london.jpeg',
    paris: 'Paris.jpeg',
    newYork: 'NewYork.jpg'
};

let userName;

document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("nameModal").style.display = "block";
});

document.getElementById("submitName").addEventListener("click", function() {
    userName = document.getElementById("nameInput").value;
    if (userName != null && userName != '') {
        document.getElementById("header").innerHTML = "Welcome, " + userName + "! Let's begin!";
        document.getElementById("nameModal").style.display = "none";
        document.getElementById("numberDiv").style.display = "block";
    } else {
        alert("Please enter your name."); // Consider replacing this with a user-friendly error message within the modal
    }
});

document.getElementById("submitNumber").addEventListener("click", function() {
    let number = document.getElementById("numberInput").value;

    if (number >= 1 && number <= 10) {
        document.getElementById("numberDiv").style.display = "none";
        document.getElementById("continueDiv").style.display = "block";
        document.getElementById("numberSuccess").style.display = "block";
        document.getElementById("numberSuccess").innerHTML = "Congratulations! You entered a valid number.";
    } else {
        alert("Please enter a valid number between 1 and 10."); // Consider replacing this with a user-friendly error message within the modal
    }
});

document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("continueDiv").style.display = "none";
    document.getElementById("cityChoiceDiv").style.display = "block";
});

document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("header").innerHTML = "Hello, World!";
    document.getElementById("continueDiv").style.display = "none";
    document.getElementById("numberSuccess").style.display = "none";
});

document.getElementById("submitCity").addEventListener("click", function() {
    let city = document.getElementById("citySelect").value;
    if (city != '') {
        document.getElementById("cityImage").src = cityImages[city];
        document.getElementById("cityImage").style.display = "block";
        document.getElementById("finishButton").style.display = "block";
    } else {
        alert("Please select a city."); // Consider replacing this with a user-friendly error message within the modal
    }
});

document.getElementById("finishButton").addEventListener("click", function() {
    document.getElementById("header").innerHTML = "Hope you liked it, " + userName + "!";
    document.getElementById("nameModal").style.display = "none";
    document.getElementById("numberDiv").style.display = "none";
    document.getElementById("continueDiv").style.display = "none";
    document.getElementById("cityChoiceDiv").style.display = "none";
    document.getElementById("cityImage").style.display = "none";
    document.getElementById("finishButton").style.display = "none";
    document.getElementById("startButton").style.display = "block";
});
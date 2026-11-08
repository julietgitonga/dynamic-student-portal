// Welcome message
alert("Welcome to Kabarak University Student Portal!");

// Display message in the console
console.log("Student Portal is running successfully.");
// Student information
let studentName = "Juliet";
let studyYear = 1;

console.log("Student Name: " + studentName);
console.log("Year of Study: " + studyYear);
// Check student's year of study
if (studyYear === 1) {
    console.log("Welcome, first-year student!");
} else {
    console.log("Welcome, continuing student!");
}
// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Registration form validation
const registrationForm = document.querySelector("form");

registrationForm.addEventListener("submit", function(event) {
    const studentName = document.getElementById("name").value.trim();

    if (studentName === "") {
        event.preventDefault();
        alert("Please enter your full name.");
    }
});
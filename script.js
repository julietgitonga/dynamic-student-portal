// Welcome message on the homepage
if (document.querySelector(".home-layout")) {
    alert("Welcome to Kabarak University Student Portal!");

    console.log("Student Portal is running successfully.");
}

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

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        const nameInput = document.getElementById("name");

        if (nameInput && nameInput.value.trim() === "") {
            event.preventDefault();
            alert("Please enter your full name.");
        }
    });
}

// Array of student names
const students = [
    "Juliet Gitonga",
    "Mary Wanjiku",
    "John Kamau",
    "Peter Mwangi",
    "Grace Achieng"
];

// Function to add a student to the page
function addStudentToPage(name) {
    const studentList = document.getElementById("student-list");

    if (!studentList) return;

    const listItem = document.createElement("li");

    listItem.textContent = name;

    studentList.appendChild(listItem);
}

// Function to display all students
function displayAllStudents(students) {
    const studentList = document.getElementById("student-list");

    if (!studentList) return;

    // Clear the previous list
    studentList.innerHTML = "";

    // Display each student
    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }
}

// Button click event
const showStudentsButton = document.getElementById("show-students");

console.log("Show Students Button:", showStudentsButton);

if (showStudentsButton) {
    showStudentsButton.addEventListener("click", function() {
        displayAllStudents(students);
    });
}
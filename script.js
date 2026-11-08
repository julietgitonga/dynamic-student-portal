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

// Function to add a student to the page
function addStudentToPage(student) {
    const studentList = document.getElementById("student-list");

    if (!studentList) return;

    const listItem = document.createElement("li");

    listItem.textContent =
        student.name + " - " +
        student.course + " (Year " +
        student.year + ")";

    studentList.appendChild(listItem);
}

// Function to display all students
function displayAllStudents(students) {
    const studentList = document.getElementById("student-list");
    const studentCount = document.getElementById("student-count");

    if (!studentList) return;

    studentList.innerHTML = "";

    if (studentCount) {
        studentCount.textContent = students.length;
    }

    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }
}

// Fetch student data from students.json
function loadStudents() {
    fetch("students.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Could not load student data.");
            }

            return response.json();
        })
        .then(function(students) {
            displayAllStudents(students);
        })
        .catch(function(error) {
            console.error("Error loading students:", error);

            const studentList = document.getElementById("student-list");

            if (studentList) {
                studentList.innerHTML =
                    "<li>Unable to load student information. Please try again.</li>";
            }

            const studentCount = document.getElementById("student-count");

            if (studentCount) {
                studentCount.textContent = "0";
            }
        });
}

// Show students when the button is clicked
const showStudentsButton = document.getElementById("show-students");

if (showStudentsButton) {
    showStudentsButton.addEventListener("click", loadStudents);
}
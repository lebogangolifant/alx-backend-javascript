
// Interface definition
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 37,
  location: "California",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render table using Vanilla JavaScript
const renderTable = (students: Student[]): void => {
    // Create a table element
    const table = document.createElement("table");

    // Create header row
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);
    headerCell1.textContent = "First Name";
    headerCell2.textContent = "Location";

    // Iterate over students and append rows
    students.forEach((student) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });

    // Append table to the body
    document.body.appendChild(table);
};

// Call the renderTable function with studentsList
renderTable(studentsList);

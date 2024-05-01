// Define an interface named Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Bernard',
  lastName: 'Nketia',
  age: 27,
  location: 'Arizona'
};

const student2: Student = {
  firstName: 'Tesla Gina',
  lastName: 'Nketia',
  age: 22,
  location: 'Kumasi'
};

// Array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table and append rows for each student
const renderTable = (students: Student[]) => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};

// Render the table with the students list
renderTable(studentsList);

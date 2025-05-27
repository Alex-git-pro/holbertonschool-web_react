interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Euang',
  lastName: 'Thong',
  age: 38,
  location: 'Thailande',
};

const student2: Student = {
  firstName: 'Aun',
  lastName: 'Ice',
  age: 41,
  location: 'Thailande',
};

const studentsList: Student[] = [student1, student2]; // <-- CORRECT !

const table = document.createElement('table');
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

const headerRow = document.createElement('tr');

const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
firstNameHeader.style.border = '1px solid black';
firstNameHeader.style.padding = '8px';

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
locationHeader.style.border = '1px solid black';
locationHeader.style.padding = '8px';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = '1px solid black';
  firstNameCell.style.padding = '8px';

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  locationCell.style.border = '1px solid black';
  locationCell.style.padding = '8px';

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);

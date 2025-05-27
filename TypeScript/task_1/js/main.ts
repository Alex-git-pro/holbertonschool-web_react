// Définition de l'interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
const teacher1: Teacher = {
  firstName: 'Arm',
  lastName: 'Jame',
  fullTimeEmployee: true,
  location: 'Bangkok',
  contract: false,
};

console.log(teacher1);

const h2 = document.createElement('h2');
h2.textContent = `${teacher1.firstName} ${teacher1.lastName} - ${teacher1.location}`;
document.body.appendChild(h2);

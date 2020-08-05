const surname = prompt("Enter your surname", "");
const firstName = prompt("Enter your first name", "");
const middleName = prompt("Enter your middle name", "");
const age = prompt("Enter your age:", "");
const birthdayString = prompt(
  "Enter your date of birth (example: 23.12.1998)",
  "dd.mm.yyyy"
);

const isMale = confirm("Is your gender male?");

const sex = isMale ? "male" : "female";
let isPensioner = null;

if (sex === "male" && age >= 65) {
  isPensioner = true;
} else if (sex === "female" && age >= 55) {
  isPensioner = true;
} else {
  isPensioner = false;
}

const birthdayArray = birthdayString.split(".");

let todaysDate = new Date();
const dateOfBirth = new Date(
  birthdayArray[2],
  birthdayArray[1] - 1,
  birthdayArray[0]
);
//Вычисляю количество миллисекунд между датой рождения и сегодняшним днем и делю на количество миллисекунд в одном дне
let daysAge = Math.floor((todaysDate - dateOfBirth) / 86400000);

let calculatedAge = null;
if (
  todaysDate <
  new Date(todaysDate.getFullYear(), birthdayArray[1] - 1, birthdayArray[0])
) {
  calculatedAge = todaysDate.getFullYear() - dateOfBirth.getFullYear() - 1;
} else {
  calculatedAge = todaysDate.getFullYear() - dateOfBirth.getFullYear();
}

let isCorrectAge = calculatedAge === +age;

if (isCorrectAge) {
  alert(
    `Your full name: ${surname} ${firstName} ${middleName}
Your age: ${age}
You will be ${+age + 5} in 5 years
Your gender: ${sex}
You are ${isPensioner ? "pensioner" : "not a pensioner"}
You have lived full days: ${daysAge}`
  );
} else {
  alert("Incorrect age or date of birth");
}

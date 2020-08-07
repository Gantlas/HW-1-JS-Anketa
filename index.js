function isCorrectName(name) {
  const regForName = /[^a-z]/i;
  return !regForName.test(name) && !!name;
}

function isCorrectNumber(num) {
  const regForNumber = /[^\d]/i;
  return !regForNumber.test(num) && !!num;
}

function isCorrectDate(str) {
  const regForDate = /^\d\d\.\d\d\.\d\d\d\d$/;
  return regForDate.test(str);
}

function getInfo(outputText, func) {
  let data = prompt(outputText, "");
  while (!func(data)) {
    data = prompt(`!!! Invalid input !!! ${outputText}`, "");
  }
  return data[0].toUpperCase() + data.slice(1);
}

const surname = getInfo("Enter your surname", isCorrectName);
const firstName = getInfo("Enter your first name", isCorrectName);
const middleName = getInfo("Enter your middle name", isCorrectName);
const age = getInfo("Enter your age", isCorrectNumber);
let birthdayString = null;
let isCorrectAge = false;
let daysAge = null;

while (!isCorrectDate(birthdayString) || !isCorrectAge) {
  birthdayString = String(
    prompt(
      `Enter your date of birth (example: 23.12.1998)
Your age: ${age}`,
      "dd.mm.yyyy"
    )
  );

  const birthdayArray = birthdayString.split(".");

  let todaysDate = new Date();
  const dateOfBirth = new Date(
    birthdayArray[2],
    birthdayArray[1] - 1,
    birthdayArray[0]
  );

  daysAge = Math.floor((todaysDate - dateOfBirth) / 86400000);

  let calculatedAge = null;
  if (
    todaysDate <
    new Date(todaysDate.getFullYear(), birthdayArray[1] - 1, birthdayArray[0])
  ) {
    calculatedAge = todaysDate.getFullYear() - dateOfBirth.getFullYear() - 1;
  } else {
    calculatedAge = todaysDate.getFullYear() - dateOfBirth.getFullYear();
  }

  isCorrectAge = calculatedAge === +age;
}

const isMale = confirm("Is your gender male?");

const gender = isMale ? "male" : "female";
let isPensioner = null;

if (gender === "male" && age >= 65) {
  isPensioner = true;
} else if (gender === "female" && age >= 55) {
  isPensioner = true;
} else {
  isPensioner = false;
}

alert(
  `Your full name: ${surname} ${firstName} ${middleName}
Your age: ${age}
You will be ${+age + 5} in 5 years
Your gender: ${gender}
You are ${isPensioner ? "pensioner" : "not a pensioner"}
You have lived full days: ${daysAge}`
);

/*************************** Подсчет русских гласных в строке ************************************/
// const string = prompt("Enter the string", "");
// const re = /[аеёиоуыэ-я]/gi;
// let count = null;

// if (!string) {
//   count = 0;
// } else {
//   const arrOfVowels = string.match(re);
//   count = !arrOfVowels ? 0 : arrOfVowels.length;
// }

// console.log(count);

const init = () => {
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

    daysAge = ageInDays(todaysDate, dateOfBirth);
    isCorrectAge = compareAge(todaysDate, dateOfBirth, birthdayArray, age);
  }

  const isMale = confirm("Is your gender male?");

  const gender = isMale ? "male" : "female";

  print(surname, firstName, middleName, age, gender, isPensioner, daysAge);
};

const isCorrectName = (name) => {
  const regForName = /[^a-z]/i;
  return !regForName.test(name) && !!name;
};

const isCorrectNumber = (num) => {
  const regForNumber = /[^\d]/i;
  return !regForNumber.test(num) && !!num && +num;
};

const isCorrectDate = (str) => {
  const regForDate = /^\d\d\.\d\d\.\d\d\d\d$/;
  return regForDate.test(str);
};

// const getInfo = (outputText, func) => {
//   let data = prompt(outputText, "");
//   while (!func(data)) {
//     data = prompt(`!!! Invalid input !!! ${outputText}`, "");
//   }
//   return data[0].toUpperCase() + data.slice(1);
// };
const getInfo = (outputText, func) => {
  let data = prompt(outputText, "");
  if (!func(data)) {
    data = alert(`!!! Invalid input !!! ${outputText}`, "");
    return getInfo(outputText, func);
  }
  return data[0].toUpperCase() + data.slice(1);
};

const ageInDays = (today, birthday) => {
  let age = Math.floor((today - birthday) / 86400000);
  return age;
};

const compareAge = (today, birthday, birthArr, age) => {
  let calculatedAge = null;
  if (today < new Date(today.getFullYear(), birthArr[1] - 1, birthArr[0])) {
    calculatedAge = today.getFullYear() - birthday.getFullYear() - 1;
  } else {
    calculatedAge = today.getFullYear() - birthday.getFullYear();
  }

  return calculatedAge === +age;
};

const isPensioner = (gender, age) => {
  if (gender === "male" && age >= 65) {
    return true;
  } else if (gender === "female" && age >= 55) {
    return true;
  } else {
    return false;
  }
};

const print = (
  surname,
  firstName,
  middleName,
  age,
  gender,
  isPensioner,
  daysAge
) => {
  alert(
    `Your full name: ${surname} ${firstName} ${middleName}
Your age: ${age}
You will be ${+age + 5} in 5 years
Your gender: ${gender}
You are ${isPensioner(gender, age) ? "pensioner" : "not a pensioner"}
You have lived full days: ${daysAge}`
  );
};

init();

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

/*************************** Подсчет русских гласных в строке (for)************************************/
// const string = prompt("Enter the string", "");
// const arrOfVowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
// let count = 0;

// for (let i = 0; i < string.length; i++) {
//   for (let j = 0; j < arrOfVowels.length; j++) {
//     if (
//       string[i] === arrOfVowels[j] ||
//       string[i] === arrOfVowels[j].toUpperCase()
//     ) {
//       count++;
//       break;
//     }
//   }
// }

// console.log(count);

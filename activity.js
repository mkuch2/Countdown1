/* Beginner Challenge */

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

/* Do all of these using proper ES6 syntax
Using the following array of objects,
*/

// (1) Write an arrow function that adds a new entry to bookList
const addBook = (newTitle, newAuthor) => {
  // your code here
  bookList.push({ title: newTitle, author: newAuthor });
};

// (2) Write an arrow function that removes a specific book from the bookList
const removeBook = (removeTitle, removeAuthor) => {
  // your code here
  bookList = bookList.filter(
    (book) => book.title !== removeTitle && book.author !== removeAuthor,
  );
};

// (3) Write an arrow function that prints all book titles using .forEach()
const printBooks = () => {
  // your code here
  bookList.forEach((book) =>
    console.log(`Title: ${book.title} Author: ${book.author}`),
  );
};

/* Intermediate Challenge */

// (4) Write a one-line arrow function that takes in a number and returns
// whether the number is positive or negative using a ternary operator
const numberSign = (n) => (n > 0 ? "+" : "-");

/* (5) Write a switch statement for a 'day' variable that prints something
based off of what day of the week it is */

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Its monday");
    break;
  case "Tuesday":
    console.log("Its tuesday");
    break;
  case "Wednesday":
    console.log("Its Wednesday");
    break;
  default:
    console.log("Its not monday OR tueday OR wednesdsay!!!");
}

/* (6) Write an arrow function that takes in a number and returns the sum
of every number from 1 up to that number */

const sumUp = (n) => {
  // your code here
  let sum = 0;
  while (n > 0) {
    sum += n;
    n -= 1;
  }

  return sum;
};

/* Harder Challenge */

// (7) Convert Celsius to Fahrenheit and return clothing advice

const temperature = (celsius) => {
  // your code here
  const fahrenheit = celsius * 1.8 + 32;

  if (fahrenheit > 80) {
    console.log("Don't wear a sweater!");
  } else {
    console.log("Feel free to wear a sweater pal");
  }
};

/* (8) Print the amount of truthy values in an array using .forEach() */

const truthy = (arr) => {
  // your code here
  let count = 0;
  arr.forEach((i) => (i ? (count += 1) : 0));

  return count;
};

/* (9) Using map(), return an array of objects that contain:
   - fullName
   - averageGrade */

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

const gpaToLetter = (gpa) => {
  if (gpa >= 3.7) return "A";
  if (gpa >= 3.0) return "B";
  if (gpa >= 2.0) return "C";
  if (gpa >= 1.0) return "D";
  return "F";
};

const newArr = attendance.map((student) => ({
  // your code here
  fullName: student.firstName + student.lastName,
  averageGrade: gpaToLetter(student.gpa),
}));

/* Hardest Challenge (Don't do this without completing harder challenges) */

/* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
// does not support leading zeros
const numberToWordsLength = (num) => {
  const words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
  };

  return words[num].length;
};

const allPathsLeadToFour = (num) => {
  // your code here
  const num_path = [];
  let cur_num = num;

  while (cur_num !== 4) {
    num_path.push(cur_num);
    cur_num = numberToWordsLength(cur_num);
  }

  num_path.push(4);

  return num_path;
};

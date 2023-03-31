// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("makeIntros", () => {
  it("provides a name and occupation for each member of the people object", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" },
    ];
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    expect(makeIntrosButUgly(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// b) Create the function that makes the test pass.

// Pseudocode:
// map through the array, for each object, extract the name, capitalize it, then use string interpolation to return an array of statements
// capitalize the name:
//// splitting the string into an array
//// use map to iterate on the first and last name
//// use .toUpperCase on the first value of each array
//// rejoing the mapped array using join(" ")
// use string interpolation to return the introduction using dot notation to access the occupation

const makeIntros = (array) => {
  return array.map((person) => {
    let capitalName = person.name
      .split(" ")
      .map((name) => {
        return name[0].toUpperCase() + name.substring(1);
      })
      .join(" ");
    return `${capitalName} is ${person.occupation}.`;
  });
};

// declaring variables is SO last year, let's make it "simpler™️"

const makeIntrosButUgly = (array) => {
  return array.map((person) => {
    return `${person.name
      .split(" ")
      .map((name) => {
        return name[0].toUpperCase() + name.substring(1);
      })
      .join(" ")} is ${person.occupation}.`;
  });
};

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("moduloThreeEvenIfTheArrayIsTrash", () => {
  it("returns an array of only the remainder of dividing numbers by three ", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
    // Expected output: [ 2, 1, -1 ]
    expect(moduloThreeEvenIfTheArrayIsTrash(hodgepodge1)).toEqual([
      2, 0, -1, 0,
    ]);
    expect(moduloThreeEvenIfTheArrayIsTrash(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

// b) Create the function that makes the test pass.

//PseudoCode
// Use a combination of filter(), .map() and the modulo operator % to return only the numbers in an array, then use the modulo operator to extract the remainder when divided by three
// use .filter(typeof value === "number") to extract only the values that are numbers
// .map over the array and perform a modulo 3

moduloThreeEvenIfTheArrayIsTrash = (array) => {
  return array
    .filter((value) => typeof value === "number")
    .map((value) => value % 3);
};

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfCubes", () => {
  it("returns the sum of the cubes of each value in the array", () => {
    const cubeAndSum1 = [2, 3, 4];
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10];
    // Expected output: 1125
    expect(sumOfCubes(cubeAndSum1)).toEqual(99);
    expect(sumOfCubes(cubeAndSum2)).toEqual(1125);
  });
});

// b) Create the function that makes the test pass.
//Pseudocode:
// use the reduce method to accumalate a running total of each value in the array, use the exponent method ** to cube each value as it's accumalated

sumOfCubes = (array) => {
  return array
    .map((value) => value ** 3)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
};

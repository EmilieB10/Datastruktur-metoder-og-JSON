const peopleArrayWithObjects = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    country: "USA",
    hobbies: ["Reading", "Hiking", "Photography", "Swimming"],
  },
  {
    id: 2,
    name: "Bob",
    age: 35,
    email: "bob@example.com",
    country: "Canada",
    hobbies: ["Cooking", "Playing guitar", "Gardening", "Traveling"],
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    email: "charlie@example.com",
    country: "UK",
    hobbies: ["Painting", "Skiing", "Music", "Cycling"],
  },
  {
    id: 4,
    name: "David",
    age: 40,
    email: "david@example.com",
    country: "Australia",
    hobbies: ["Swimming", "Fishing", "Reading"],
  },
  {
    id: 5,
    name: "Eva",
    age: 32,
    email: "eva@example.com",
    country: "Germany",
    hobbies: ["Skiing", "Playing Guitar", "Photography", "Cooking"],
  },
];

//! 1.

/* console.log the array */
console.log(peopleArrayWithObjects);

//! 1.1:

/* create variables for firstPerson (first person object in the array) and lastPerson (last person object in the array) for peopleArrayWithObjects: */

const firstPerson = peopleArrayWithObjects[0];

const lastPerson = peopleArrayWithObjects[4];

//! 1.2

/* console.log all the objects of the first and last persons using Object.entries. Expected output: 
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
*/

console.log(Object.entries(firstPerson));
console.log(Object.entries(lastPerson));

//! 1.3
/* console.log the hobbies of the first person using Object.entries. Expected output is to be an array with 4 elements */

console.log(Object.entries(firstPerson.hobbies));

//! 1.4

/* Use .map instead of Object.entries to achieve the same result in the console as in 1.3: */

const hobbies = peopleArrayWithObjects.map((person) => person.hobbies);

console.log(hobbies[0]);

//! 1.5.

/* Use .filter and .includes to find out which hobbies are common between firstPerson and lastPerson. Expected output is an array with common hobbies */

const commonHobbies = firstPerson.hobbies.filter((hobbie) => {
  if (lastPerson.hobbies.includes(hobbie)) {
    return hobbie;
  }
});
console.log(commonHobbies);

//! 1.6.

/* Use .map to display all the persons with their information on your page DOM manipulation (look at the shared repo of the lessons in the js file mappedOutArray.js for tips). It should also show what hobbies they have in common. Choose whether to use createElement or innerHTML. (Great if you do it both ways, comment out the unused code. Remember to use defer if the script tag is in the head!) */

const task = document.querySelector("#oppgave");

const showPeople = (data) => {
  data.map((person) => {
    const array = [];
    const commonHobbies = data.map((person2) => {
      if (person != person2) {
        person.hobbies.map((hobby) => {
          if (person2.hobbies.includes(hobby)) {
            array.push({
              person: person2.name,
              hobby,
              hobby,
            });
          }
        });
      }
    });
    const card = `
    <div class="card standard-box_style">
        <h2>${person.name}</h2>
        <p>Age: ${person.age}</p>
        <p>email: ${person.email}</p>
        <p>country: ${person.country}</p>
        <p>hobbies: ${person.hobbies}</p>
        <p>Common hobbies with ${array.map((common) => {
          return "<br>" + common.person + ": " + common.hobby + " ";
        })}</p>
    </div>
    `;

    const newCard = document.createElement("div");
    newCard.innerHTML = card;
    task.appendChild(newCard);
  });
};
showPeople(peopleArrayWithObjects);

// __________________________________________________________________

function showPeopleTwo(data) {
  data.map((person) => {
    const array = [];
    const commonHobbies = data.map((person2) => {
      if (person != person2) {
        person.hobbies.map((hobby) => {
          if (person2.hobbies.includes(hobby)) {
            array.push({
              person: person2.name,
              hobby,
              hobby,
            });
          }
        });
      }
    });
    const card = document.createElement("div");

    const heading = document.createElement("h2");
    heading.textContent = person.name;

    const ageParagraph = document.createElement("p");
    ageParagraph.textContent = `Age: ${person.age}`;

    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = `Email: ${person.email}`;

    const countryParagraph = document.createElement("p");
    countryParagraph.textContent = `Country: ${person.country}`;

    const hobbiesParagraph = document.createElement("p");
    hobbiesParagraph.textContent = `Hobbies: ${person.hobbies}`;

    const commonhobbies = document.createElement("p");

    task.appendChild(heading);
    task.appendChild(ageParagraph);
    task.appendChild(emailParagraph);
    task.appendChild(countryParagraph);
    task.appendChild(hobbiesParagraph);
    const common = array.map((common) => {
      commonhobbies.textContent += common.person + ": " + common.hobby + ", ";
      task.appendChild(commonhobbies);
    });

    task.appendChild(card);
  });
}

showPeopleTwo(peopleArrayWithObjects);
//! 1.7

/* Use .filter to find all persons who have atleast 1 hobby that is the same hobbies as firstPerson. Display this using DOM manipulation */

const allPeople = peopleArrayWithObjects.filter((people) => {
  if (people != firstPerson) {
    people.hobbies.map((hobbies) => {
      if (firstPerson.hobbies.includes(hobbies)) {
        // task.textContent += `${people.name} ,`;
      }
    });
  }
});

//! 2

/* Generate a random array with 10 random numbers between 1 and 100. console.log the array. */

const createRandomArray = (max) => {
  const randomNumbers = [];
  if (max > 0 && max <= 10) {
    for (let i = 0; i < max; i++) {
      randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return randomNumbers;
  } else {
    return alert("Max must be between 1 and 10");
  }
};

const randomArray = createRandomArray(10);
console.log(randomArray);

//! 2.1

/* Separate odd and even numbers in the array you created in task 2 into two new arrays. console.log the new arrays. */

const oddArray = randomArray.filter((number) => number % 2 !== 0);
console.log(oddArray);

const evenArray = randomArray.filter((number) => number % 2 === 0);
console.log(evenArray);

//! 2.2

/* Write a function that finds the largest number in the different arrays. Use a parameter so that the same function can be used on both arrays. Tips: Math.max() */

const largestNumber = (array) => {
  return Math.max(...array);
};

console.log(largestNumber(oddArray));
console.log(largestNumber(evenArray));

//! 2.3.

/* Write a function that adds up all the numbers in the different arrays. So the sum of odd numbers in one result and the sum of even numbers in another result. Use a parameter in the function so that the same function can be used on both arrays. console.log the results. */

const sumOfArray = (array) => {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum;
};

console.log("sum odd array:", sumOfArray(oddArray));
console.log("sum even array:", sumOfArray(evenArray));

//! 2.4

/* Create a function that adds up the numbers in different arrays. Use 2 parameters to be able to use 2 different arrays (the odds and evens arrays you created earlier). Write an if-else statement that console logs which of the two arrays has the largest sum. Remember an else statement that says if both are equal (very unlikely) */

const sumOfBothArrays = (arr1, arr2) => {
  const arr1Sum = sumOfArray(arr1);
  const arr2Sum = sumOfArray(arr2);
  return arr1Sum + arr2Sum;
};

console.log("sum of both:", sumOfBothArrays(oddArray, evenArray));

const ifStatement = () => {
  if (sumOfArray(oddArray) > sumOfArray(evenArray)) {
    const oddArrayLargest = `OddArray has the largest sum of: ${sumOfArray(
      oddArray
    )}`;
    console.log(oddArrayLargest);
    return oddArrayLargest;
  } else if (sumOfArray(evenArray) > sumOfArray(oddArray)) {
    const evenArrayLargest = `EvenArray has the largest sum of: ${sumOfArray(
      evenArray
    )}`;
    console.log(evenArrayLargest);
    return evenArrayLargest;
  } else {
    const bothEqual = "They are both equal";
    console.log("They are both equal");
    return bothEqual;
  }
};

//! 2.5:

/* Display the results from all steps in task 2 (2, 2.1, 2.2, 2.3, 2.4) with DOM in a good way */

const result = `
<div>
        <h2>Last Task</h2>
        <p>Random array: ${randomArray}</p>
        <p>Odd array: ${oddArray} <br> Even array: ${evenArray}</p>
        <p>Largest number in odd array: ${largestNumber(
          oddArray
        )} <br> Largest number in even array: ${largestNumber(evenArray)}</p>
        <p>Sum of odd array: ${sumOfArray(
          oddArray
        )} <br> Sum of even array:${sumOfArray(evenArray)}</p>
        <p>Sum of both arrays: ${sumOfBothArrays(oddArray, evenArray)}</p>
        <p>${ifStatement()}</p>
    </div>
`;
const newResult = document.createElement("div");
newResult.innerHTML = result;
task.appendChild(newResult);

//! 1)How to compare two JSON have the same properties without order?
const obj1 = {
  Name: "Person 1",
  Age: 5,
};
const keys1 = Object.keys(obj1).sort();
console.log(keys1);
// console.log(Object.keys(obj1).sort());
// console.log(Object.keys(obj1));
// console.log(JSON.stringify(keys1))

const obj2 = {
  Age: 5,
  Name: "Person 1",
};
const keys2 = Object.keys(obj1).sort();
console.log(keys2);
// console.log(Object.keys(obj1).sort());
// console.log(Object.keys(obj1));
// console.log(JSON.stringify(keys2))

if (JSON.stringify(keys1) === JSON.stringify(keys2)) {
  console.log("Equal!");
} else {
  console.log("Not Equal!");
}

//! 2) Use the rest countries 'API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].flags);
    console.log(data[i].names);
  }
};

//! 3) use the same rest countries and print all countries names, regions, sub-region and populations.

let xhr1 = new XMLHttpRequest();
console.log(xhr1);
xhr1.open("GET", "https://restcountries.com/v3.1/all");
xhr1.send();
xhr1.onload = function () {
  const data = JSON.parse(xhr1.response);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].flags);
    console.log(data[i].name);
    console.log(data[i].region);
    console.log(data[i].subregion);
    console.log(data[i].population);
  }
};

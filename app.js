const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Bill', 'Joe', 'Mike', 'John', 'Kevin', 'George', 'Stan', 'Willy', 'Jack', 'Jake', 'Ben', 'Matt', 'Arnold', 'Scottie', 'Clyde', 'Larry', 'Chris', 'David', 'Edward', 'Tom'];
const femaleNames = ['Anya', 'Janina', 'Chloe', 'Rebecca', 'Marielle', 'Dolores', 'Eloise', 'Sophie', 'Millie', 'Madeline', 'Mia', 'Myra', 'Gemma', 'Amber', 'Miranda', 'Tanya', 'Rose', 'Esther', 'Anna', 'Alexis']
const lastNames = ['Woodhouse', 'Knightley', 'Woodhouse', 'Smith', 'Goth', 'Taylor-Joy', 'Bates', 'Connor', 'Weston', 'Graves', 'Whelan', 'Fairfax', 'Hart', 'Elton', 'Reynolds', 'Cox', 'Coles', 'Burns', 'Francolini', 'Stokley'];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
};

const people = [];

for (loop = 0; loop < 20; loop++) {
  const drawedGender = randChoice(genders);
  const drawedFirstName = drawedGender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
  const drawedLastName = randChoice(lastNames);
  
  // const drawedLastName = Math.random...?????

  const drawedAge = Math.floor(Math.random() * 60) + 18;
  const drawedPhone = Math.floor(Math.random() * (889999999 - 500000000) + 500000000);

  const renderedPerson = {
    gender: drawedGender,
    firstName: drawedFirstName,
    lastName: drawedLastName,
    age: drawedAge,
    phone: drawedPhone,

  };

  people.push(renderedPerson);
}

const arrayToJSON = JSON.stringify(people);
  
  fs.writeFile('people.json', arrayToJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
const { faker } = require('@faker-js/faker');
const fs = require("fs");

const generatePersonsData = (number) => {
  const persons = [];
  for (let i = 0; i < number; i++) {
    persons.push({
      id: i + 1,
      name: faker.name.firstName(),
      description: faker.lorem.paragraphs(2),
      picture: faker.image.avatar(),
      country: faker.address.country(),
    });
  }
  return persons;
};

module.exports = () => {
	return { users: generatePersonsData(100) };
}

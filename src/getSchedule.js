const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const result = { Tuesday: { exhibition: [] },
  Wednesday: { exhibition: [] },
  Thursday: { exhibition: [] },
  Friday: { exhibition: [] },
  Saturday: { exhibition: [] },
  Sunday: { exhibition: [] },
  Monday: { exhibition: [] },
};

let oneResult = {};

const iHateMondays = () => {
  oneResult.Monday = {};
  oneResult.Monday.officeHour = 'CLOSED';
  oneResult.Monday.exhibition = 'The zoo will be closed!';
};

const officeHours = (scheduleTarget) => {
  const days = Object.keys(result);
  if (!scheduleTarget) {
    days.forEach((element) => {
      result[element]
        .officeHour = `Open from ${hours[element].open}am until ${hours[element].close}pm`;
    });
    result.Monday.officeHour = 'CLOSED';
  }
  if (days.includes(scheduleTarget)) {
    const nomes = scheduleTarget;
    oneResult[scheduleTarget] = { exhibition: [],
      officeHour: `Open from ${hours[nomes].open}am until ${hours[nomes].close}pm` };
  }
};
officeHours();

const exhibition = (scheduleTarget) => {
  const days = Object.keys(result);
  if (!scheduleTarget) {
    days.forEach((day) => {
      const animals = species.filter((animal) => (animal.availability).includes(day));
      animals.forEach((animal) => { result[day].exhibition.push(animal.name); });
    });
    result.Monday.exhibition = 'The zoo will be closed!';
  }
  if (days.includes(scheduleTarget)) {
    const animals = species.filter((animal) => (animal.availability).includes(scheduleTarget));
    animals.forEach((animal) => { oneResult[scheduleTarget].exhibition.push(animal.name); });
  }
};
exhibition();

const days = Object.keys(result);

const array = species.map((element) => element.name);

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    iHateMondays();
    return oneResult;
  }
  if (days.includes(scheduleTarget)) {
    oneResult = {};
    officeHours(scheduleTarget);
    exhibition(scheduleTarget);
    return oneResult;
  }
  if (array.includes(scheduleTarget)) {
    const animal = species.find((element) => element.name === scheduleTarget);
    return animal.availability;
  }
  return result;
}

module.exports = getSchedule;

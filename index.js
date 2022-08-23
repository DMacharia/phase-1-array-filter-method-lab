// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

const findMatching = (drivers, firstName) => {
  return drivers.filter(
    (drivers) => drivers.toLowerCase() === firstName.toLowerCase()
  );
};

const fuzzyMatch = (drivers, firstLetterOfName) => {
  return drivers.filter(
    (drivers) =>
      drivers.toLowerCase().substring(0, 2) === firstLetterOfName.toLowerCase()
  );
};

const matchName = (name, hometown) => {
  const drivers = [
    {
      name: "Bobby",
      hometown: "Pittsburgh",
    },
    {
      name: "Sammy",
      hometown: "New York",
    },
    {
      name: "Sally",
      hometown: "Cleveland",
    },
    {
      name: "Annette",
      hometown: "Los Angeles",
    },
    {
      name: "Bobby",
      hometown: "Tampa Bay",
    },
  ];
  return drivers.filter((drivers) => drivers.name === hometown);
};

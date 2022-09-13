import Person from "./Person";

const Filter = ({ persons, personsFilter }) => {
  return persons
    .filter((val) => {
      if (personsFilter === "") {
        return val;
      } else if (val.name.toLowerCase().includes(personsFilter.toLowerCase())) {
        return val;
      }
    })
    .map((person) => <Person key={person.id} person={person} />);
};

export default Filter;

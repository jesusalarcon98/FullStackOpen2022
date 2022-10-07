import Person from "./Person";

const Filter = ({ persons, personsFilter, deletePerson }) => {
  return persons
    .filter((val) => {
      if (personsFilter === "") {
        return val;
      } else if (val.name.toLowerCase().includes(personsFilter.toLowerCase())) {
        return val;
      } else return false;
    })
    .map((person, index) => (
      <Person deletePerson={deletePerson} index={index} person={person} />
    ));
};

export default Filter;

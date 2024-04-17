export const Person = ({ person }) => {
  let marriageStatus = '';

  if (!person.isMarried) {
    marriageStatus = 'I am not married';
  } else if (person.sex === 'm') {
    marriageStatus = `${person.partnerName} is my wife`;
  } else {
    marriageStatus = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age !== undefined && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">{`${marriageStatus}`}</p>
    </section>
  );
};

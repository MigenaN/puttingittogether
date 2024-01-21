import React, { useState } from 'react';

const PersonCard = (props) => {
  // Destructure props and initialize state
const { name1, age: initialAge, haircolor } = props;
const [age, setAge] = useState(initialAge);

  // Function to increase the age by 1 year
const increaseAge = () => {
    setAge(age + 1);
};

return (
    <div className="PersonCard">
    <h2>{name1}</h2>
    <p>Age: {age}</p>
    <p>Hair Color: {haircolor}</p>
    <button onClick={increaseAge}>Birthday Button for {name1}</button>
    </div>
);
};

export default PersonCard;

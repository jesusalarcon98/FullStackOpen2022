import React, { useState } from "react"; //importamos la funcion state
import ReactDOM from "react-dom";

const Title = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text, value }) => (
  <button onClick={handleClick}>
    {text} {value}
  </button>
);

const Text = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <Title text="Give feedbacks" />
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div>
        <Title text="Statics" />
        <Text text="good" value={good} />
        <Text text="neutral" value={neutral} />
        <Text text="bad" value={bad} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

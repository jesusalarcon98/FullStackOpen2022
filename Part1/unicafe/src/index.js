import React, { useState } from "react"; //importamos la funcion state
import ReactDOM from "react-dom";

const Title = ({ text }) => <h1>{text}</h1>;

const Statics = ({ good, bad, neutral, average }) => {
  console.log(good);
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    /* Esta entrando */
    return (
      <div>
        <Text text="good" value={good} />
        <Text text="neutral" value={neutral} />
        <Text text="bad" value={bad} />
        <All text="all" value={good + bad + neutral} />
        <Positive text="posivites " value={good + bad + neutral} good={good} />
        <Average text="average " value={average} total={good + bad + neutral} />
      </div>
    );
  } else {
    return <div>No feedback given</div>;
  }
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Text = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const All = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const Positive = ({ text, value, good }) => (
  <div>
    {text}
    {good / value}
  </div>
);

const Average = ({ text, value, total }) => (
  <div>
    {text} {value / total}
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const average = good * 1 + neutral * 0 + bad * -1;

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
        <Statics good={good} bad={bad} neutral={neutral} average={average} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + "%";
  if (all !== 0) {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="posivites " value={positive} />
          <Statistic text="average " value={average} />
        </tbody>
      </table>
    );
  } else {
    return <div>No feedback given</div>;
  }
};

const App = () => {
  //each click has his own state
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
        <Title text="Statistics " />
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Anecdote = ({ text, votes, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {text}
        <br></br>
        has {votes} votes
      </p>
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0); //anecdota
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0)); //votos
  const setToSelected = () => {
    //funcion de anecdota para numero random
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };
  const handleToVotes = () => {
    const copy = [...voted];
    copy[selected] += 1;
    setVoted(copy);
  };
  const MaxVoted = voted.indexOf(Math.max(...voted));

  return (
    <div>
      <Anecdote
        title="Anecdote of the day"
        text={anecdotes[selected]}
        votes={voted[selected]}
      />
      <Button handleClick={setToSelected} text="Next anecdote" />
      <Button handleClick={handleToVotes} text="Vote" />

      <Anecdote
        title="Anecdote with most votes"
        text={anecdotes[MaxVoted]}
        votes={voted[MaxVoted]}
      />
    </div>
  );
};
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

import React,{useState} from 'react';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnsers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  
  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}
  return (
    <div className="App">
      <h1>Find your type!</h1>
      <button className='start' onClick={start}>Start</button>
      <p>Loading Question ... </p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;

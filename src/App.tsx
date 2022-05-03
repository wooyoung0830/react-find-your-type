import React,{useState} from 'react';
import QuestionCard from './components/QuestionCard';
import {QuestionState} from './API';

type AnswerObject = {
  question : string;
  answer : string;
  correct : boolean;
  correctAnswer : string;
}

const TOTAL_QUESTION = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  
  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      // User answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if(correct) setScore(prev => prev + 1);
      // Save answer in the array for user answers
      const answerObject = {
        question : questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {};

  const start = () => {
    // 문제를 불러오는 api
    // 혹은 문제 리스트 보여주기
  };

  return (
    <div className="App">
      <h1>Find your type!</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTION ?
        (<button className='start' onClick={start}>Start</button>)
        : null
      }
      {!gameOver ? (<p className='score'>Score : {score}</p>) : null}
      {loading && (<p>Loading Question ... </p>) }
      {!loading && !gameOver && (
        <QuestionCard 
          questionNum={number+1}
          totalQuestions = {TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback = {checkAnswer}
        />
      )}
      {!gameOver && 
      !loading && 
      userAnswers.length === number +1 &&
      number !== TOTAL_QUESTION -1 ? 
        (<button className='next' onClick={nextQuestion}>Next Question</button>)
      : null}
      
    </div>
  );
};

export default App;

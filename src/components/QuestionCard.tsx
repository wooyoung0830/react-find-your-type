import React from 'react';
type Props = {
    question : string;
    answers : string[];
    callback : any;
    userAnswer : any;
    questionNum : number;
    totalQuestions : number;
}

function QuestionCard ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNum, 
    totalQuestions} : Props) {
        <div>
            <p className='number'>
                Question : {questionNum} / {totalQuestions}
            </p>
            {/* dangerouslySetInnerHTML : DOM에 innerHTMl을 사용하기 위해서. __html키로 객체전달 */}
            <p dangerouslySetInnerHTML={{__html : question}}/>
            <div>
                {answers.map(answwer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html : answer}} />
                        </button>
                    </div>
                })}
            </div>
        </div>
    };

export default QuestionCard;
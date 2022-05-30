import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	

	const [showScore, setShowScore] = useState(false)

	const [score, setScore] = useState(0)

	const [response, setResponse] = useState("");

	const questions = [
		{
			questionText: 'What do all birds have?',
			answerOptions: [
				{ answerText: 'Fur', isCorrect: false },
				{ answerText: 'Feathers', isCorrect: true },
				{ answerText: 'Scales', isCorrect: false },
				{ answerText: 'Shell', isCorrect: false },
			],
		},
		{
			questionText: 'Which bird cannot fly?',
			answerOptions: [
				{ answerText: 'Duck', isCorrect: false },
				{ answerText: 'Robin', isCorrect: false },
				{ answerText: 'Penguin', isCorrect: true },
				{ answerText: 'Owl', isCorrect: false },
			],
		},
		{
			questionText: 'Whose footprint is this?',
			answerOptions: [
				{ answerText: 'Duck', isCorrect: true },
				{ answerText: 'Peacock', isCorrect: false },
				{ answerText: 'Owl', isCorrect: false },
				{ answerText: 'Robin', isCorrect: false },
			],
		},
		{
			questionText: "The shape of a bird's beak tells us...",
			answerOptions: [
				{ answerText: 'what it sound like', isCorrect: false },
				{ answerText: 'whether it can fly', isCorrect: false },
				{ answerText: 'where it lives', isCorrect: false },
				{ answerText: 'what food it eats', isCorrect: true },
			],
		},
	];

	const handleAnswerButtonClick = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1)
			setResponse ("Correct")
		} 

		if (isCorrect === false) {
			setResponse ("Try again!")
		}
	};	

	const nextQuestion = () =>{
		const nextQuestion = currentQuestion + 1;
	
		if (nextQuestion < questions.length) {
			setResponse("")
			setCurrentQuestion(nextQuestion)
		
		} else {
			setShowScore(true)
		}
	}

    const restartQuiz = () => {
        setCurrentQuestion (0)
        setShowScore (false)
        setScore(0)
        setResponse ('')
    }
    


	return (
		<div className='app'>
			{showScore ? (
            <div className='score-section'>You scored {questions.length} out of {questions.length} </div> 
            
            ) : 
				(<>
        
            
				<div className='question-section'>
					<div className='question-count'>
						<span>Question {currentQuestion + 1}</span>/{questions.length}
					</div>
					<div className='question-text'>{questions[currentQuestion].questionText}</div>
				</div>
				<div className='answer-section'>
					{questions[currentQuestion].answerOptions.map((answerOption, index) => (
						<button key={index} 
						onClick= {() => handleAnswerButtonClick(answerOption.isCorrect)} > 
						{answerOption.answerText}</button>				
					))}
				<div className="answer-response"> {response} </div>
				</div>
				{response === "Correct"? <button onClick={nextQuestion}>Next</button>:null} 
				
				</>
				)}
            
		</div>
	);
}

export default Quiz

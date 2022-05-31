import React, { useState } from 'react';
import './Quiz.css';
import footprint from '../components/QuizActivity/duck-footprints.jpg'

const Quiz = () => {

	const [currentQuestion, setCurrentQuestion] = useState(0);


	const [showScore, setShowScore] = useState(false)

	const [score, setScore] = useState(0)

	const [response, setResponse] = useState("");

	const [style0, setStyle0] = useState("")
	const [style1, setStyle1] = useState("")
	const [style2, setStyle2] = useState("")
	const [style3, setStyle3] = useState("")

	const questions = [
		{
			questionText: 'What do all birds have?',
			questionImage: <img src={footprint}/>,
			answerOptions: [
				{ answerText: 'Fur', isCorrect: false },
				{ answerText: 'Feathers', isCorrect: true },
				{ answerText: 'Scales', isCorrect: false },
				{ answerText: 'Shell', isCorrect: false },
			],
		},
		{
			questionText: 'Which bird cannot fly?',
			questionImage: <img src={footprint}/>,
			answerOptions: [
				{ answerText: 'Duck', isCorrect: false },
				{ answerText: 'Robin', isCorrect: false },
				{ answerText: 'Penguin', isCorrect: true },
				{ answerText: 'Owl', isCorrect: false },
			],
		},
		{
			questionText: 'Whose footprint is this?',
			questionImage: <img src={footprint}/>,
			answerOptions: [
				{ answerText: 'Duck', isCorrect: true },
				{ answerText: 'Peacock', isCorrect: false },
				{ answerText: 'Owl', isCorrect: false },
				{ answerText: 'Robin', isCorrect: false },
			],
		},
		{
			questionText: "The shape of a bird's beak tells us...",
			questionImage: <img src={footprint}/>,
			answerOptions: [
				{ answerText: 'what it sound like', isCorrect: false },
				{ answerText: 'whether it can fly', isCorrect: false },
				{ answerText: 'where it lives', isCorrect: false },
				{ answerText: 'what food it eats', isCorrect: true },
			],
		},
	];

	const handleAnswerButtonClick0 = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1)
			setResponse("Correct")
			setStyle0("green")
		}

		if (isCorrect === false) {
			setResponse("Try again!")
			setStyle0("red")
		}
	};

	const handleAnswerButtonClick1 = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1)
			setResponse("Correct")
			setStyle1("green")
		}

		if (isCorrect === false) {
			setResponse("Try again!")
			setStyle1("red")
		}
	};

	const handleAnswerButtonClick2 = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1)
			setResponse("Correct")
			setStyle2("green")
		}

		if (isCorrect === false) {
			setResponse("Try again!")
			setStyle2("red")
		}
	};
	const handleAnswerButtonClick3 = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1)
			setResponse("Correct")
			setStyle3("green")
		}

		if (isCorrect === false) {
			setResponse("Try again!")
			setStyle3("red")
		}
	};
	const nextQuestion = () => {
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setResponse("")
			setCurrentQuestion(nextQuestion)
			setStyle0("")
			setStyle1("")
			setStyle2("")
			setStyle3("")

		} else {
			setShowScore(true)
		}
	}

	const onRestartClick = () => {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0)
		setResponse('')
		setStyle0("")
		setStyle1("")
		setStyle2("")
		setStyle3("")
	}



	return (
		<div className='quiz-container'>
			{showScore ? (
				<div>
					<br />
					<br />
					<div className='score-section'>You scored {questions.length} out of {questions.length}</div>
					<br />
					<button className="restart" onClick={onRestartClick}>Restart quiz</button>
				</div>
			) :
				(<>


					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<div className='question-image'>{questions[currentQuestion].questionImage}</div>
					</div>
					<div className='answer-section'>
						<button onClick={() => handleAnswerButtonClick0(questions[currentQuestion].answerOptions[0].isCorrect)} style={{ backgroundColor: style0 }} >
							{questions[currentQuestion].answerOptions[0].answerText}</button>
						<button onClick={() => handleAnswerButtonClick1(questions[currentQuestion].answerOptions[1].isCorrect)} style={{ backgroundColor: style1 }} >
							{questions[currentQuestion].answerOptions[1].answerText}</button>
						<button onClick={() => handleAnswerButtonClick2(questions[currentQuestion].answerOptions[2].isCorrect)} style={{ backgroundColor: style2 }} >
							{questions[currentQuestion].answerOptions[2].answerText}</button>
						<button onClick={() => handleAnswerButtonClick3(questions[currentQuestion].answerOptions[3].isCorrect)} style={{ backgroundColor: style3 }} >
							{questions[currentQuestion].answerOptions[3].answerText}</button>
						<div className="answer-response"> {response} </div>
					</div>
					<div className='next-button'>
					{response === "Correct" ? <button onClick={nextQuestion}>Next</button> : null}
					</div>

				</>
				)}
				<button className="restart" onClick={onRestartClick}>Restart quiz</button>
		</div>
	);
}

export default Quiz

import React, { useState } from 'react';
import './Quiz.css';
import quizPic1 from '../components/QuizActivity/quiz-pic1.jpg'
import quizPic2 from '../components/QuizActivity/quiz-pic2.jpg'
import quizPic3 from '../components/QuizActivity/quiz-pic3.jpg'
import quizPic4 from '../components/QuizActivity/quiz-pic4.jpg'

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
			questionImage: <img src={quizPic1} className='question-image' alt='pictures of feather, fur, shell, scales'/>,
			answerOptions: [
				{ answerText: 'Fur', isCorrect: false },
				{ answerText: 'Feathers', isCorrect: true },
				{ answerText: 'Scales', isCorrect: false },
				{ answerText: 'Shell', isCorrect: false },
			],
		},
		{
			questionText: 'Which bird cannot fly?',
			questionImage: <img src={quizPic2} className='question-image' alt='various birds'/>,
			answerOptions: [
				{ answerText: 'Duck', isCorrect: false },
				{ answerText: 'Robin', isCorrect: false },
				{ answerText: 'Penguin', isCorrect: true },
				{ answerText: 'Owl', isCorrect: false },
			],
		},
		{
			questionText: 'Whose footprints are these?',
			questionImage: <img src={quizPic3} className='question-image' alt='footprints in sand'/>,
			answerOptions: [
				{ answerText: 'Duck', isCorrect: true },
				{ answerText: 'Peacock', isCorrect: false },
				{ answerText: 'Owl', isCorrect: false },
				{ answerText: 'Robin', isCorrect: false },
			],
		},
		{
			questionText: "The shape of a bird's beak tells us...",
			questionImage: <img src={quizPic4}  className='question-image' alt='various beaks'/>,
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
			setResponse("Correct!")
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
			setResponse("Correct!")
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
			setResponse("Correct!")
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
			setResponse("Correct!")
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

		
			{/* <button onClick={nextQuestion}>Start Quiz</button> */}


			{showScore ? (
				<div className='show-score'>
					<div className='score-section'>You scored {questions.length} out of {questions.length}</div>
					<br />
					<button className="quiz-restart" onClick={onRestartClick}>Restart quiz</button>
				</div>
			) :
				(
				<>
					<div className='question-section'>
						<div>
							{questions[currentQuestion].questionImage}
						</div>
						<div className='question-count'>
							<span className='quiz-title'>Question {currentQuestion + 1}/{questions.length}</span>
						</div>
						<div className='question-text'>
							{questions[currentQuestion].questionText}
						</div>
					</div>
					<div className='answer-section'>
						<button className='quiz-button' onClick={() => handleAnswerButtonClick0(questions[currentQuestion].answerOptions[0].isCorrect)} style={{ backgroundColor: style0 }}>
							{questions[currentQuestion].answerOptions[0].answerText}</button>
						<button className='quiz-button' onClick={() => handleAnswerButtonClick1(questions[currentQuestion].answerOptions[1].isCorrect)} style={{ backgroundColor: style1 }}>
							{questions[currentQuestion].answerOptions[1].answerText}</button>
						<button className='quiz-button' onClick={() => handleAnswerButtonClick2(questions[currentQuestion].answerOptions[2].isCorrect)} style={{ backgroundColor: style2 }} >
							{questions[currentQuestion].answerOptions[2].answerText}</button>
						<button className='quiz-button' onClick={() => handleAnswerButtonClick3(questions[currentQuestion].answerOptions[3].isCorrect)} style={{ backgroundColor: style3 }}>
							{questions[currentQuestion].answerOptions[3].answerText}
						</button>
					</div>
				
					<div className="answer-response"> {response} </div>
					
					<div className='next-button'>
					{response === "Correct!" ? <button className='quiz-button' onClick={nextQuestion}>Next</button> : null}
					</div>
				</>
				)}
		</div>
	);
}

export default Quiz

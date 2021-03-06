import React, { useState} from 'react';
import './Quiz.css';
import quizPic1 from '../components/QuizActivity/quiz-pic1.jpg'
import quizPic2 from '../components/QuizActivity/quiz-pic2.jpg'
import quizPic3 from '../components/QuizActivity/quiz-pic3.jpg'
import quizPic4 from '../components/QuizActivity/quiz-pic4.jpg'
import quizPic5 from '../components/QuizActivity/quiz-pic5.jpg'
import robinJump from '../components/QuizActivity/robin-jump.gif'

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
			questionImage: <img src={quizPic1} className='question-image' alt='pictures of feather, fur, shell, scales' />,
			answerOptions: [
				{ answerText: 'Fur', isCorrect: false },
				{ answerText: 'Feathers', isCorrect: true },
				{ answerText: 'Scales', isCorrect: false },
				{ answerText: 'Shell', isCorrect: false },
			],
		},
		{
			questionText: 'Which bird cannot fly?',
			questionImage: <img src={quizPic2} className='question-image' alt='various birds' />,
			answerOptions: [
				{ answerText: 'Duck', isCorrect: false },
				{ answerText: 'Robin', isCorrect: false },
				{ answerText: 'Penguin', isCorrect: true },
				{ answerText: 'Owl', isCorrect: false },
			],
		},
		{
			questionText: 'Whose footprints are these?',
			questionImage: <img src={quizPic3} className='question-image' alt='footprints in sand' />,
			answerOptions: [
				{ answerText: 'Duck', isCorrect: true },
				{ answerText: 'Peacock', isCorrect: false },
				{ answerText: 'Owl', isCorrect: false },
				{ answerText: 'Robin', isCorrect: false },
			],
		},
		{
			questionText: "The shape of a bird's beak tells us...",
			questionImage: <img src={quizPic4} className='question-image' alt='various beaks' />,
			answerOptions: [
				{ answerText: 'what it sounds like', isCorrect: false },
				{ answerText: 'whether it can fly', isCorrect: false },
				{ answerText: 'where it lives', isCorrect: false },
				{ answerText: 'what food it eats', isCorrect: true },
			],
		},
		{
			questionText: "All birds...",
			questionImage: <img src={quizPic5} className='question-image' alt='birds' />,
			answerOptions: [
				{ answerText: 'can fly', isCorrect: false },
				{ answerText: 'eat worms', isCorrect: false },
				{ answerText: 'can swim', isCorrect: false },
				{ answerText: 'lay eggs', isCorrect: true },
			],
		}

	];

	const handleAnswerButtonClick0 = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1)
			setResponse("Correct!")
			setStyle0("#59c851")
		}

		if (isCorrect === false) {
			setResponse("Try again!")
			setStyle0("#ff69ad")
		}
	};

	const handleAnswerButtonClick1 = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1)
			setResponse("Correct!")
			setStyle1("#59c851")
		}

		if (isCorrect === false) {
			setResponse("Try again!")
			setStyle1("#ff69ad")
		}
	};

	const handleAnswerButtonClick2 = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1)
			setResponse("Correct!")
			setStyle2("#59c851")
		}

		if (isCorrect === false) {
			setResponse("Try again!")
			setStyle2("#ff69ad")
		}
	};
	const handleAnswerButtonClick3 = (isCorrect) => {

		if (isCorrect === true) {
			setScore(score + 1)
			setResponse("Correct!")
			setStyle3("#59c851")
		}

		if (isCorrect === false) {
			setResponse("Try again!")
			setStyle3("#ff69ad")
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
			<>
				<div className='robin-jump'>
					<img src={robinJump} alt='robin jumping'/>

				</div>
				<div className='show-score'>

				<div className='score-section'>

					You scored {questions.length} 
					<br/>
					out of {questions.length}!
				</div>
					<br />
				<button className="quiz-button" onClick={onRestartClick}>Restart quiz</button>
				</div>
			</>
			) :
				(
					<>	
					<div>
						</div>
						<div>
							<div className='quiz-title'> Question {currentQuestion + 1}/{questions.length}</div>
							<div className='question-text'>
								{questions[currentQuestion].questionText}</div>
						</div>
						<div className='question-section'>
							<div>
								{questions[currentQuestion].questionImage}
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
							<div className="answer-response">
								<div> {response} </div>

									{response === "Correct!" ? 
									<button className='next-button' onClick={nextQuestion}>
									
											<i className = 'fas fa-crow' id='fa-crow'></i>        
											<i className = 'fas fa-angle-right' id='fa-arrow'></i>
										
									</button> : null}

							</div>

						</div>

					</>
				)}
		</div>
	);
}
export default Quiz

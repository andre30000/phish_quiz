const QuestionBlock = ( { answer, setChosenAnswerItem, chosenAnswerItem, chosenScore, setChosenScore, unansweredQuestionsIds, setUnansweredQuestionsIds, quizItemId }) => {

    const handleClick = () => {
        setChosenAnswerItem((prevState) => [...prevState, answer.text]); //this is adding to an array state -> destructure the former array, add the new answer
        setUnansweredQuestionsIds(unansweredQuestionsIds.filter((id) => id !== quizItemId)) //this removes the question id from the array
        setChosenScore((prevState) => [...prevState, answer.score])
    }

    const validPick = !chosenAnswerItem?.includes(answer.text) && !unansweredQuestionsIds?.includes(quizItemId)

    return (
    <button 
        className="question-block" 
        onClick={handleClick}
        disabled={validPick} //this says the options are disabled if they do not include teh answer text. grays out the unchosen ones
        > 
        <h3>{answer.ques}</h3>
        {/* <img src={answer.image} alt={answer.alt} className="image" /> */}
        {/* <h3>{answer.text}</h3> */}
        <p className="quip">
            <a>{answer.quip}</a>
        </p>
    </button>
)}

export default QuestionBlock
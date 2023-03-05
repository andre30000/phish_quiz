import QuestionBlock from './QuestionBlock'


//quizItem comes from the App.js - mapped from the 'quiz' json .content - must destructure (make an object?)

//for mapping this time, have to add _index since there is no unique id to use as a "key"
const QuestionsBlock = ( { quizItem, setChosenAnswerItem, chosenAnswerItem, chosenScore, setChosenScore, unansweredQuestionsIds, setUnansweredQuestionsIds} ) => {

    return (
    <>
      <h2 id={quizItem.id} className="question-title">{quizItem.questionText}</h2> 
        <div className="questions-container">
            {quizItem && quizItem?.answerOptions.map((answerItem, _index) => (
            <QuestionBlock key={_index} 
            answer={answerItem} 
            quizItemId={quizItem.id}
            setChosenAnswerItem={setChosenAnswerItem} 
            chosenAnswerItem={chosenAnswerItem}
            chosenScore={chosenScore}
            setChosenScore={setChosenScore}
            unansweredQuestionsIds={unansweredQuestionsIds}
            setUnansweredQuestionsIds={setUnansweredQuestionsIds}
            />
            ))}
        </div>
    </>
)}

export default QuestionsBlock
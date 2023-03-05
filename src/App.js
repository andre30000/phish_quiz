import Title from "./components/Title.jsx";
import QuestionsBlock from "./components/QuestionsBlock.jsx"
import AnswerBlock from "./components/AnswerBlock.jsx";
import { useState, useEffect } from "react";


// data is being hosted at localhost:8000/quiz by json-server 

const App = () => {
  const [quiz, setQuiz] = useState(null);
  const [ chosenAnswerItem, setChosenAnswerItem] = useState([]); //this keeps track of which answer we chose
  const [unansweredQuestionsIds, setUnansweredQuestionsIds] = useState(null); //this keeps track of what question we have answered
  const [showAnswer, setShowAnswer] = useState(false)
  const [ chosenScore, setChosenScore] = useState([])

  console.log("chosen: " + chosenAnswerItem)
  console.log("score: " + chosenScore)

  const fetchData = async () =>
  {
    try {
      const response = await fetch('http://localhost:8000/quiz') //fetches the json-server, writes it to response
      const json = await response.json() //makes a constant of the json
      setQuiz(json) //overrides the false default setting to whatever the json returns
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{  //updates the page whenever fetchData() does something different
    fetchData()
  }, [])

  //this use effect gets the unanswered question ids. if quiz exists, gets it content and maps the ids by destructuring, returns the id. gets the id of each ojbject in the content array
  useEffect(() => {
    const unansweredIds = quiz?.content?.map(({id}) => id)
    setUnansweredQuestionsIds(unansweredIds) //overriding the setUnansweredQuestions default array
  }, [quiz])

  //this useeffect brings the page to the top most unanswered question or the final answer. math.min returns the smaller number from the array, which ist eh top most unsanswered question from quiz.id
  useEffect(() => {
    if (unansweredQuestionsIds) {
      if (unansweredQuestionsIds.length <= 0 && chosenAnswerItem.length >= 1) {
        setShowAnswer(true)
        const answerBlock = document.getElementById("answer-block")
        answerBlock?.scrollIntoView({ behavior: "smooth"})
      }
      const highestId = Math.min(...unansweredQuestionsIds)
      const highestElement = document.getElementById(highestId)
      highestElement?.scrollIntoView({ behavior: "smooth"})
    }
  }, [unansweredQuestionsIds, showAnswer, chosenAnswerItem])

console.log("unanswered array: " + unansweredQuestionsIds)

/*if a quiz exists, and there is quiz content, then we map the content (contentItem) to the questionBlock element. passes thru the content as a quizItem*/
//map has to have a "key" which is the 2nd param
  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} /> 
        {quiz && quiz?.content?.map(contentItem => (
            <QuestionsBlock 
              key={contentItem.id} 
              quizItem={contentItem} 
              setChosenAnswerItem={setChosenAnswerItem}
              chosenAnswerItem={chosenAnswerItem} 
              chosenScore={chosenScore}
              setChosenScore={setChosenScore}
              unansweredQuestionsIds={unansweredQuestionsIds}
              setUnansweredQuestionsIds={setUnansweredQuestionsIds}
              /> 
              //passing through chosenAnswerItem to keep track of it at all times to black out other opotions
              //passing setChosenAnswerItem thru QuestionsBlock to QuestiobBlock
        ))}
        { showAnswer && ( // if showAnswer exists, show the Answerblock
          <AnswerBlock 
            answerOptions={quiz?.answers}
            chosenAnswers={chosenAnswerItem}
            chosenScore={chosenScore}
            setChosenScore={setChosenScore}
          />
        )}
    </div>
  );
}

export default App;

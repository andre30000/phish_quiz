import {useEffect, useState} from 'react'

const AnswerBlock = ({ answerOptions, chosenAnswers, chosenScore, setChosenScore }) => {
    const [result, setResult] = useState(null)
    const finalScore = chosenScore.reduce((a, b) => a + b, 0)

    console.log("finalscore(answerblock): " + finalScore)
    console.log("answeroptions(answeblock): " + answerOptions)
    console.log("chosenanswer0(answeblock): " + chosenAnswers[0])

    useEffect(() => {
        answerOptions.forEach(answer => {
            // if( chosenAnswers.includes(answer.combination[0]) &&
            //     chosenAnswers.includes(answer.combination[1]) &&
            //     chosenAnswers.includes(answer.combination[2])
            //   ) {
            //     setResult(answer)
            //   } else if (!result) {
            //     setResult(answerOptions[0])
            //   }
            if(finalScore == 8){
              setResult(answerOptions[1])
            } else if (finalScore > 8 && finalScore <= 12) {
              setResult(answerOptions[2])
            } else {
              setResult(answerOptions[0])
            }
        })
    }, [result])

    console.log(result)
    
    return (
    <div id="answer-block" className="answer-block">
        <h2>{result?.text}</h2>
        <img src={result?.image} alt={result?.alt}></img>


    </div>
    )
}

export default AnswerBlock
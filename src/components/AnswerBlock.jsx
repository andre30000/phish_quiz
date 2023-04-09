import {useEffect, useState} from 'react'

const AnswerBlock = ({ answerOptions, chosenAnswers, chosenScore, setChosenScore }) => {
    const [result, setResult] = useState(null)
    const finalScore = chosenScore.reduce((a, b) => a + b, 0)

    console.log("finalscore(answerblock): " + finalScore)
    // console.log("answeroptions(answerblock): " + answerOptions)
    // console.log("chosenanswer0(answerblock): " + chosenAnswers[0])

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
            if(finalScore <= 0){
              setResult(answerOptions[0])
            } else if (finalScore > 400 && finalScore <= 550) {
              setResult(answerOptions[1])
            } else if (finalScore > 551 && finalScore <= 750) {
              setResult(answerOptions[3])
            } else if (finalScore > 751 && finalScore <= 950) {
              setResult(answerOptions[2])
            } else if (finalScore == 11) {
              setResult(answerOptions[4])
            } else if (finalScore == 12) {
              setResult(answerOptions[5])
            } else if (finalScore == 13) {
              setResult(answerOptions[6])
            } else if (finalScore == 14) {
              setResult(answerOptions[7])
            } else if (finalScore == 15) {
              setResult(answerOptions[8])
            } else if (finalScore == 16) {
              setResult(answerOptions[9])
            } else if (finalScore == 17) {
              setResult(answerOptions[10])
            } else if (finalScore == 18) {
              setResult(answerOptions[11])
            } else if (finalScore == 19) {
              setResult(answerOptions[12])
            } else if (finalScore == 20) {
              setResult(answerOptions[13])
            } else if (finalScore == 21) {
              setResult(answerOptions[14])
            } else if (finalScore == 22) {
              setResult(answerOptions[15])
            } else if (finalScore == 23) {
              setResult(answerOptions[16])
            } else if (finalScore == 24) {
              setResult(answerOptions[17])
            } else if (finalScore == 25) {
              setResult(answerOptions[18])
            } else if (finalScore == 26) {
              setResult(answerOptions[19])
            } else if (finalScore == 27) {
              setResult(answerOptions[20])
            } else if (finalScore == 28) {
              setResult(answerOptions[21])
            } else if (finalScore == 29) {
              setResult(answerOptions[22])
            } else if (finalScore == 30) {
              setResult(answerOptions[23])
            } else if (finalScore == 31) {
              setResult(answerOptions[24])
            } else if (finalScore == 32) {
              setResult(answerOptions[25])
            } else {
              setResult(answerOptions[33])
            }
        })
    }, [result])

    //console.log(result)
    
    return (
    <div id="answer-block" className="answer-block">
        <h2>{result?.text}</h2>
        <p>{result?.alt}</p>
        <img src={result?.image} alt={result?.alt}></img>


    </div>
    )
}

export default AnswerBlock
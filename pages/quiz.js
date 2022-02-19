import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { useState } from 'react'
import { Radio, Button, Card } from '@geist-ui/core'

export default function Quiz() {
    //if the answer is correct, the user is redirected to the next question, if the answer is incorrect, the user is provided with the correct answer, why it's correct, and then routed to the next lesson.
    const [quizFlag, setQuizFlag] = useState(undefined)
    const [color, setColor] = useState('')
  
    const [answer, setAnswer] = useState('0')
    const handler = val => {
        setAnswer(val)
        console.log(val)
    }

    const interpret = () => {
        if (answer === '1') {
            setQuizFlag("correct")
            setColor("cyan")
        } else {
            setQuizFlag("incorrect")
            setColor("error")
        }
    }

    return (
        <div>
            <h2>
                What is the correct way to assign a value to a variable?
            </h2>
            <>
                <Radio.Group value={answer} onChange={handler}>
                    <Radio value="1">const myVariable</Radio>
                    <Radio value="2">variable myVariable</Radio>
                </Radio.Group>
                <Button onClick={interpret}>
                    Submit
                </Button>
                {quizFlag && <Card type={color}>
                    {quizFlag === "correct" && <p>Correct!</p>}
                    {quizFlag === "incorrect" && <p>Incorrect! The correct answer is: <code>const myVariable</code></p>}
                </Card>}
            </>
        </div>
    )
}

import { useRouter } from 'next/router'

export default function Lesson() {
const router = useRouter();

  return (
 <div>
  <h1>
    Lesson 1: Variables
  </h1>
  <p>
    Variables are used to store values that can be used throughout your code.
  </p>
  <p>
    Example: <code>const myVariable = 'Hello World'</code>
  </p>
  <button type="button" onClick={() => router.push('lesson/1/quiz/1')} >
    Quiz
  </button>
 </div>
  )
}
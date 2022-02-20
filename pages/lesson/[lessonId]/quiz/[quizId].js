import { useRouter } from 'next/router'

export default function QuizPage() {
const router = useRouter();

  return (
<div>
    Hello quiz
    {router.query.quizId}
</div>
  )
  }
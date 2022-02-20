import { useRouter } from 'next/router'

export default function LessonPage() {
const router = useRouter();

  return (
<div>
    Hello Lesson
    {router.query.lessonId}
</div>
  )
  }
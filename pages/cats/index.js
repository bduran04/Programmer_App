import { useRouter } from 'next/router'

export default function CatsPage() {
const router = useRouter();

  return (
<div>
   Cats Page
   <button onClick={() => {router.push("/cats/1")}}>
       Cat Profile
   </button>
   <button onClick={() => {router.push("/cats/2")}}>
       Cat Profile 2
   </button>
</div>
  )
  }
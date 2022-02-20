import { useRouter } from 'next/router'

export default function CatProfilePage() {
const router = useRouter();

  return (
<div>
    Hello Cat Profile
    {router.query.catId}
    <button onClick={() => {router.push("/cats/2/kittens/1")}}>
       Kitten Profile 1
   </button>
</div>
  )
  }
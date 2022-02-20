import { useRouter } from 'next/router'

export default function CatProfilePage() {
const router = useRouter();

  return (
<div>
    Hello Kittens for cat 
    {router.query.catId}
</div>
  )
  }
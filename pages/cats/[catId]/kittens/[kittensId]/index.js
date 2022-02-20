import { useRouter } from 'next/router'

export default function KittensProfilePage() {
const router = useRouter();

  return (
<div>
    Hello cat Profile
    {router.query.catId}
    Hello kitten Profile
    {router.query.kittensId}
</div>
  )
  }
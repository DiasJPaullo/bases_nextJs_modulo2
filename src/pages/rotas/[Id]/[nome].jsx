import { useRouter } from "next/router"
import Link from "next/link"
export default function Nome_id(){
  const router = useRouter()
  const id = router.query.Id
  const nome = router.query.nome
  console.log(router)
  return (
    <div>
      <h1>/Rotas/ {id} / {nome} </h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}
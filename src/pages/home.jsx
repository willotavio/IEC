import { useParams } from "react-router-dom"

export default function Home() {
    const params = useParams()

    return(
        <div className='home'>
            <p>Bem-vindo(a), { params.nome ?? "anônimo" }!</p>
        </div>
    )
}
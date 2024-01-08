import MenuLateral from "./MenuLateral"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import useAppData from "../../data/hook/useAppData"
import ForcaAutenticacao from "../auth/ForcaAutenticacao"

interface LayoutProps{
    titulo: string
    subtitulo: string
    children?: any
}
export default function Layout(props: LayoutProps){
    const { tema } = useAppData()
    return(
        <ForcaAutenticacao>

        <div className={`${tema} flex h-screen w-screen`}>
            <MenuLateral />
            <div className={`
                flex flex-col w-full p-7
                bg-gray-300 dark:bg-gray-800
                `}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
        </ForcaAutenticacao>
    )
}
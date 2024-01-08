import useAppData from "../../data/hook/useAppData"
import AvatarUsuario from "./AvatarUsuario"
import BotaoAlternaTema from "./BotaoAlternaTema"
import Titulo from "./Titulo"

interface CabecalhoProps{
    titulo: string
    subtitulo: string
}
export default function Cabecalho(props: CabecalhoProps){
    const { tema, alternaTema} = useAppData()
    return( 
        <div className={`flex`}>
            <Titulo  titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={` flex flex-grow justify-end items-center`}>
                <BotaoAlternaTema tema={tema} alternaTema={alternaTema} />
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    )
}
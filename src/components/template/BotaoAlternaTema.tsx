import { iconeLua, iconeSol } from "../icons"

interface BotaoAlternaTemaProps{
    tema: string |undefined
    alternaTema: (() => void) | undefined
}
export default function BotaoAlternaTema(props: BotaoAlternaTemaProps){
    return props.tema === 'dark' ? (
        <div onClick={props.alternaTema} className={`
             hidden sm:flex items-center cursor-pointer 
             bg-gradient-to-r from-yellow-300 to-yellow-600
               w-14 lg:w-24 h-8 p-1 rounded-full

        `}>
            <div className={`
                 flex items-center justify-center
                  bg-white text-yellow-600
                   h-6 w-6 rounded-full

            `}>
                {iconeSol(4)}
            </div>
            <div className={`
                 hidden lg:flex items-center ml-4
                  text-white

            `}>
                <span className={` text-sm`}>Claro</span>
            </div>

        </div>

    ) : (

        <div onClick={props.alternaTema} className={`
             hidden sm:flex items-center cursor-pointer 
             bg-gradient-to-r from-gray-500 to-gray-900
               w-14 lg:w-24 h-8 p-1 rounded-full

        `}>
            <div className={`
                 hidden lg:flex  justify-end items-center mr-2
                  text-gray-300

            `}>
                <span className={` text-sm`}>Escuro</span>
            </div>
            <div className={`
                 flex items-center justify-center
                  bg-black text-yellow-300
                   w-6 h-6 rounded-full

            `}>
                {iconeLua(4)}
            </div>
            

        </div>
    )

}
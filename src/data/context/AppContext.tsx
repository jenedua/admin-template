import { createContext, useEffect, useState } from "react";

//type Tema = 'dark' | ''
interface AppContextProps{
    tema?: string
    alternaTema?: () => void
}
const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:any){
    const [tema, setTema] = useState('dark')


    function alternaTema(){
        const novoTema = tema === '' ? 'dark': ''
       setTema(novoTema)
       localStorage.setItem('tema', novoTema)
    }

    useEffect( () =>{
        const temaSalvo: string | null = localStorage.getItem('tema')
            if(temaSalvo !== null)
                setTema(temaSalvo)

    }, [])


    return (
        <AppContext.Provider value={{
            tema,
            alternaTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContext
// export const AppConsumer = AppContext.Consumer
import useAuth from "../../data/hook/useAuth";
import { iconeAjustes, iconeCasa, iconeSair, iconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    const {logout} = useAuth()
    return(
        <aside className="
             flex flex-col
              bg-gray-200 text-gray-700
             dark:bg-gray-900 
        ">
            <div className={`
                 flex flex-col items-center justify-center
                 bg-gradient-to-r from-indigo-500 to-purple-800
                 h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={iconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={iconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={iconeSino} />
            </ul>
            <ul>
                <MenuItem url="/" texto="Sair" icone={iconeSair} 
                    onClick={logout}
                    className={`
                     text-red-600 dark:text-red-400
                      hover:bg-red-400 hover:text-white
                       dark:hover:text-white
                    `}

                  />
            </ul>
        </aside>
    )
}
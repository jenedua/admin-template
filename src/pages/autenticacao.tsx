import { SetStateAction, useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { iconeAtencao } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao(){

    const {cadastrar, login , loginGoogle} = useAuth()


    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(null)

    function exibirErro(msg: any, tempoEmSegundo = 5){
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundo * 1000)
    }

    async function Submeter(){
        try{

            if(modo === 'login'){
               if (login) {
                   await login(email, senha)
               } else {
                   exibirErro('Função de login não está definida')
               }
            }else{
               if (cadastrar) {
                   await cadastrar(email, senha)
               } else {
                   exibirErro('Função de cadastro não está definida')
               }
            }
        }catch(e: any){
            exibirErro(e?.message ?? 'Erro desconhecido')
        }


    }


    return ( 
        <div className="flex h-screen items-center justify-center">
            <div className=" hidden  md:block md:w-1/2 lg:w-2/3">
                <img src="https://source.unsplash.com/random"
                 alt="Image da tela de Autenticação" 
                 className=" h-screen w-full object-cover" /> 
            </div>
            <div className=" m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`
                    text-3xl font-bold mb-5
                `}>
                    {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>
                {erro ? (
                    <div className= {`
                    flex items-center
                    bg-red-400 text-white 
                    py-3 px-5 my-2 border border-red-700 rounded-lg
               `}>
                   {iconeAtencao()}
                   <span className="ml-3">{erro}</span>

               </div>

                ):false}
                
                <AuthInput 
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}
                    obligatorio
                />
                <AuthInput 
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obligatorio
                />
                <button onClick={Submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-3 py-4 mt-6
                `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-3 py-4
                `}>
                    Entrar com Google
                </button>

                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={ () => setModo('cadastro')} className={`
                             text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `} > Crie uma Conta Gratuitamente </a>
                    </p>

                ) : (
                    <p className="mt-8">
                        Já faz parte da nosso comunidade?
                        <a onClick={ () => setModo('login')} className={`
                             text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                       `} > Entre com suas credencias </a>
                    </p>
                )}
            </div>
        </div>
    )

}
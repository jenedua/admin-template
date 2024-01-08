import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'
import Cookies from 'js-cookie'

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    loginGoogle?: () => Promise<void>
    cadastrar?: (email: string, senha: string) => Promise<void>
    //cadastrar?: ((email: string, senha: string) => Promise<void> | undefined) | undefined
    login?: (email: string, senha: string) => Promise<void>
    //login?: ((email: string, senha: string) => Promise<void> | undefined) | undefined
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0]?.providerId,
        imagemUrl: usuarioFirebase.photoURL

    }

}

function gerenciarCookie(logado: string | boolean) {
    if (logado) {
        const valorDoCookie = typeof logado === 'boolean' ? logado.toString() : logado
        Cookies.set('admin-template-fed-auth', valorDoCookie, {
            expires: 7
        })

    } else {
        Cookies.remove('admin-template-fed-auth')
    }

}

export function AuthProvider(props: any) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>()

    async function configurarSessao(usuarioFirebase: any) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(undefined)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }

    }

    async function login(email: string, senha: string) {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)

            await configurarSessao(resp.user)
            route.push('/')

        } finally {
            setCarregando(false)

        }


    }
    async function cadastrar(email: string, senha: string) {
        try {
            setCarregando(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, senha)

           await configurarSessao(resp.user)
            route.push('/')

        } finally {
            setCarregando(false)

        }


    }
    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            await configurarSessao(resp.user)
            route.push('/')
            // if(resp.user?.email){
            //     const usuario =  await usuarioNormalizado(resp.user)
            //     setUsuario(usuario)
            //     route.push('/')
            // }

        } finally {
            setCarregando(false)

        }


    }
    async function logout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)

        } finally {
            setCarregando(false)

        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-fed-auth')){
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        }else{
            setCarregando(false)
        }

    }, [])

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            loginGoogle,
            cadastrar,
            login,
            logout

        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext


interface AuthInputProps{
    label: string
    valor: any
    obligatorio?: boolean
    naoRenderizarQuando?: boolean
    tipo?: 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void
}
export default function AuthInput(props: AuthInputProps){
    return props.naoRenderizarQuando ? null : (
        <div className="flex flex-col m-4">
            <label>{props.label}</label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={ e => props.valorMudou?.(e.target.value)}
                required={props.obligatorio}
                className="
                rounded-lg px-7 py-3 w-full bg-gray-200 mt-2
                border focus:border-blue-500 focus:bg-white
                 focus:outline-none
                "
              />
        </div>
    )

}
export default interface Usuario{
    uid       : string
    nome      : string | null
    email     : string | null
    token     : string | null
    provedor  : string | undefined
    imagemUrl : string | null
}
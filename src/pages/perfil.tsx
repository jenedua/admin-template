import Layout from "../components/template/Layout";
// import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";

export default function Perfil() {
  // const {alternaTema} = useAppData()
  return (

        <Layout titulo="Perfil do usuario" 
          subtitulo="Aqui você ira gerenciar as suas informações de usuario !!!">
          <h1>Perfil do usuario</h1>

          {/* <AppConsumer>
            {dados => <h3>{dados.nome}</h3>}
          </AppConsumer> */}

            {/* <button onClick={alternaTema}>Alterna Tema</button> */}
        </Layout>
  )
}

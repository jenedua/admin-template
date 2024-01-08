import Layout from "../components/template/Layout";
// import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  // const {alternaTema} = useAppData()
  return (

        <Layout titulo="Notificações" 
          subtitulo="Aqui você ira gerenciar as suas notificações !!!">
          <h1>Notificações</h1>

          {/* <AppConsumer>
            {dados => <h3>{dados.nome}</h3>}
          </AppConsumer> */}

            {/* <button onClick={alternaTema}>Alterna Tema</button> */}
        </Layout>
  )
}

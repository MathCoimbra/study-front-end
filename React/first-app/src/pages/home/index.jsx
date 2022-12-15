import {Link} from 'react-router-dom'

const Home = () => {
  /* <> e </> - sintaxe curta de fragments - recurso do react para permitir que mais de uma tag seja inserida de forma independente*/
  return ( <>
    <h1>Home</h1>
    <Link to="/login">Fazer login</Link>
    </>
  )
}

export { Home }
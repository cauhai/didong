import { Link } from "react-router-dom"
import './Home.scss'

const Home = () => {

  return (
    <div class="home">
      <h1>DI DONG</h1>
      <Link to={`/duck`}>Duck</Link>
      <Link to={`/kit`}>Kit</Link>
    </div>
  )
}

export default Home

import { Link } from "react-router-dom"
import './Home.scss'

const Home = () => {

  return (
    <div className="home">
      <h1>DI DONG</h1>
      <Link to='/duck'>Duck</Link>
      <Link to='/kit/1'>1 Kit</Link>
      <Link to='/kit/3'>3 Kits</Link>
    </div>
  )
}

export default Home

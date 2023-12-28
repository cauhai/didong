import { Link } from "react-router-dom"
import kit from './assets/kit.png'

const Kit = () => {

  return (
    <>
      <h1>KITTY</h1>
      <img width="200" src={kit} />
      <br />
      <Link to={`/`}>Home</Link>
    </>
  )
}

export default Kit

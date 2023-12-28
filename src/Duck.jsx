import { Link } from "react-router-dom"
import duck from './assets/duck.png'

const Duck = () => {

  return (
    <>
      <h1>DUCK</h1>
      <img width="200" src={duck} />
      <br />
      <Link to={`/`}>Home</Link>
    </>
  )
}

export default Duck

import { Link, useParams } from "react-router-dom"
import kit from './assets/kit.png'

const Kit = () => {
  let { n } = useParams();

  return (
    <>
      <h1>KITS</h1>
      {
        Array.from({ length: n },
          (_, i) => <img id={i} width="100" src={kit} />)
      }
      <br />
      <Link to={`/`}>Home</Link>
    </>
  )
}

export default Kit

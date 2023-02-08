import { Link} from 'react-router-dom';

import Query from "../query/index"
import "./character.css"

function Character() {
  const {data, error, loading} = Query()

  if (error) <p>..Error</p>
  if (loading) <p>..Loading</p>


  return (
    <div className='anime-Container'>
      {
        data && data.characters.results.map(e => {
          return (
            <div>
              <Link to = {`/${e.id}`}>
              <img src = {e.image} />
              <p>{e.name}</p>
              </Link>
              </div>
          )
        })
      }
    </div>
    
  )
}

export default Character
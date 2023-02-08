// import {useParams} from "react-route"
import { useParams } from "react-router-dom"
import QueryId  from "../query/QueryId"
import "./character.css"

const CharcterIdPage = () => {
    const {id} = useParams()

    const {data, error, loading} = QueryId(id)

    if (error) <p>..Error</p>
    if (loading) <p>..Loading</p>

    return (
        <div className="container">
            {
                data && <>
                <div className="IdContainer">
                <img src = {data.character.image} />
                <h1>{data.character.name}</h1>
                <h2>{data.character.id}</h2>
                <h3>{data.character.gender}</h3>
                </div>
                </>
            }
        </div>
    )
}

export default CharcterIdPage
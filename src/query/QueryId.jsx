import {useQuery, gql} from "@apollo/client"

const GetIdQuery = gql`
query ($id : ID!){
    character(id : $id) {
      id
      name
      image
    }
  }
`

const QueryId = (id) => {
    const {data, error, loading} = useQuery(GetIdQuery, {
        variables : {
        id 
        }
    })

   if (error) <p>..Error</p>
   if (data) console.log({data})

    return (
        // <div>
        //     {
        //         data && <>
        //         <img src = {data.character.image} />
        //         <p>{data.character.name}</p>
        //         <p>{data.character.id}</p>
        //         </>
        //     }
        // </div>
        {
            data, error, loading
        }
    )
}

export default QueryId
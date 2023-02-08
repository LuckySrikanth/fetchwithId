import { useQuery,gql } from "@apollo/client"

const Get_Query = gql`
query {
  characters{
    results{
      id
      name
      image
      gender
    }
  }
}
`
const Query = () => {
    const {data,loading,error} = useQuery(Get_Query) 
    return ({
        data,
        loading,
        error
    })

}

export default Query
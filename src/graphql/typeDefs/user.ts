import { gql } from "apollo-server-core";

const typeDefs=gql`
   
     type User{
        id:String
        username: String
     }
     type createUsernameResponse{
       success:Boolean
       error:String
     }

     type Query{
        searchUsers(username:String):[User]
     }
     type Mutation{
         createUsername(username:String):createUsernameResponse
     }
`

export default typeDefs
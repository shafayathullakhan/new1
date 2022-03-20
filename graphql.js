import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../../lib/schema";
import resolvers from "../../lib/resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
expert const get_weather_query = gql`
       query getbankname(name: string,ifsc: string)
         {
          getbankname(name: $name)
           name
           banks": [
          {
             ifsc
            meta {
              name 
              branch ,
              city ,
              weather {
                current {
                  temperature,
                  
                },
                tomorrow {
                  min ,
                  max
                }
              }
            }
          }

           }
         }


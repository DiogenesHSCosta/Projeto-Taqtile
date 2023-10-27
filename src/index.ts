import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
    type Query{
        hello: String
    }
`

const resolvers ={
    Query:{
        hello(){
            return "hello world👍"
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

console.log(`API rodando: ${url}`)
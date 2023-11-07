import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { AppDataSource } from './data-source';
import { User } from './entity/user';

const typeDefs = `#graphql
    type User{
      name: String,
      email: String,
      password: String,
      birthDate: String
    }
    type Query{
      users:[User]
    }
`;

const resolvers = {
  Query: {},
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function initializeServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`API rodando: ${url}`);
}

AppDataSource.initialize()
  .then(async () => {
    const users = await AppDataSource.manager.find(User);
    console.log(users);

    initializeServer();
  })
  .catch((error) => console.log(error));

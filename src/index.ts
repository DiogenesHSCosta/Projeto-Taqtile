import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { AppDataSource } from './data-source';
import { User } from './entity/user';
import { typeDefs, resolvers } from './graphql/schemas';

async function bootstrap() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`API rodando: ${url}`);
}

AppDataSource.initialize()
  .then(async () => {
    bootstrap();
  })
  .catch((error) => console.log(error));

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { AppDataSource } from './data-source';
import { User } from './entity/user';
import { typeDefs } from './graphql/schemas';
import { resolvers } from './graphql/schemas';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function bootstrap() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`API rodando: ${url}`);
}

AppDataSource.initialize()
  .then(async () => {
    const users = await AppDataSource.manager.find(User);
    console.log(users);

    bootstrap();
  })
  .catch((error) => console.log(error));

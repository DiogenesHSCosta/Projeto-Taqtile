import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { AppDataSource } from './data-source';
import { User } from './entity/User';

const typeDefs = `#graphql
    type Query{
        hello: String
    }
`;

const resolvers = {
  Query: {
    hello() {
      return 'hello world👍';
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

AppDataSource.initialize()
  .then(async () => {
    const user = new User();
    user.Name = 'João';

    await AppDataSource.manager.save(user);

    const users = await AppDataSource.manager.find(User);
    console.log(users);

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`API rodando: ${url}`);
  })
  .catch((error) => console.log(error));

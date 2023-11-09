import { AppDataSource } from '../data-source';
import { User } from '../entity/user';

const typeDefs = `#graphql
    type User {
      id: ID
      name: String
      email: String
      birthDate: String
    }

    input UserInput {
      name: String
      email: String
      password: String
      birthDate: String
    }

    type Mutation{
      createUser(data: UserInput):User
    }

    type Query{
      users:[User]
    }
`;

const resolvers = {
  Query: {
    users() {
      async () => {
        const database = await AppDataSource.getRepository(User);
        console.log(database);
        return database;
      };
    },
  },

  Mutation: {
    createUser(obj, { data }) {
      return data;
    },
  },
};

export { typeDefs, resolvers };

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
    users: async () => {
      const usersBd = await AppDataSource.manager.find(User);
      console.log(usersBd);
      return usersBd;
    },
  },

  Mutation: {
    createUser: async (obj, { data }) => {
      const newUser = new User();

      newUser.name = data.name;
      newUser.email = data.email;
      newUser.password = data.password;
      newUser.birthDate = data.birthDate;

      await AppDataSource.manager.save(newUser);

      console.log(data);
      return data;
    },
  },
};

export { typeDefs, resolvers };

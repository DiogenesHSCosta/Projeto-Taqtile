import { AppDataSource } from '../data-source';
import { User } from '../entity/user';
import { checkEmail } from '../functions/validator/checkEmailExist';
import { passwordValidator } from '../functions/validator/passwordValidator';

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

    type Mutation {
      createUser(data: UserInput):User
    }

    type Query {
      users:[User]
    }
`;

const resolvers = {
  Query: {
    users: async () => {
      const usersBd = await AppDataSource.manager.find(User);
      return usersBd;
    },
  },

  Mutation: {
    createUser: async (obj, { data }) => {
      passwordValidator(data.password);
      await checkEmail(data.email);
      const newUser = new User();

      newUser.name = data.name;
      newUser.email = data.email;
      newUser.password = data.password;
      newUser.birthDate = data.birthDate;

      await AppDataSource.manager.save(newUser);
      return data;
    },
  },
};

export { typeDefs, resolvers };

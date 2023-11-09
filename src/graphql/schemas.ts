const teste = [
  {
    name: 'douglas',
    email: 'douglas@douglas',
    password: 'douglas123',
    birthDate: '11-02-23',
  },
];

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
    users() {
      return teste;
    },
  },
  Mutation: {
    createUser(obj, { data }) {
      return data;
    },
  },
};

export { typeDefs, resolvers };

const usuarios = [
  {
    name: 'douglas',
    email: 'douglas@douglas',
    password: 'douglas123',
    birthDate: '11-02-23',
  },
];

const typeDefs = `#graphql
    type User {
      name: String
      email: String
      password: String
      birthDate: String
    }

    type Query{
      users:[User]
    }
`;

const resolvers = {
  Query: {
    users() {
      return usuarios;
    },
  },
};

export { typeDefs, resolvers };

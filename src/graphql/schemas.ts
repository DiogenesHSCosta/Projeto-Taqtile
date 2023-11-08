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

export { typeDefs, resolvers };

const typeDefs = `#graphql
    type User{
      name: String,
      email: String,
      password: String,
      birthDate: String
    }

    type Query{
      hello:String
      users:[User]
    }
`;

const resolvers = {
  Query: {
    hello() {
      return 'hello world👍';
    },
  },
};

export { typeDefs, resolvers };

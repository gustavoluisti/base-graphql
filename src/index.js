const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]!
  }
`;
const resolvers = {
  Query: {
    hello: () => "Hello World",
    users: () => [
      {
        _id: String(Math.random()),
        name: "Luis Gustavo Santos",
        email: "teste@teste.com",
        active: true,
      },
      {
        _id: String(Math.random()),
        name: "Luiz Felipe Santos",
        email: "teste@teste.com",
        active: false,
      },
      {
        _id: String(Math.random()),
        name: "Thais Santos",
        email: "teste@teste.com",
        active: true,
      },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`🧨Server started at ${url} `));

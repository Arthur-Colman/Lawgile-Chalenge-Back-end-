import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';

import models from './models';

const app = express();

//Permitir requisições


const PORT = 4000;

const typeDefs = gql`
  type Pedido {
    id: Int!
    cor: String!
    email: String!
  }
    type Query {
    getPedido(id: Int!): Pedido!
    allPedido: [Pedido!]!
  }
  type Mutation {
    createPedido(cor: String!, email: String!): Pedido!
  }
`;

const resolvers = {
  Query: {
    getPedido: (parent, {id}, {models}) => models.Pedido.findOne({where:{id}}),
    allPedido: (parent, args, {models}) => models.Pedido.findAll(),
  },
  Mutation: {
    createPedido: (parent, args, {models}) => models.Pedido.create(args),
  }
};

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

const options = {
  cors: corsOptions
};
app.use(cors('*'))
app.use(cors(corsOptions));

const server = new ApolloServer({ typeDefs, resolvers, context: {models}, cors: corsOptions });
server.applyMiddleware({
  app,
  path:'/',
  cors:false
});

models.sequelize.sync().then(() => {
  app.listen({ port: PORT }, () =>
  console.log('🚀 Server ready at http://localhost:4000/graphql')
  )
})

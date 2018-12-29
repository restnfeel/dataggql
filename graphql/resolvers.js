import { stations } from "./db";

const resolvers = {
  Query: {
    stations: () => stations()
  }
};

export default resolvers;

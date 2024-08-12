import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BASE_URL} from "../../src/constants";

const client = new ApolloClient({
  uri: `${BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;

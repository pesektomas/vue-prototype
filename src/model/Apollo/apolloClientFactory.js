import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export function createApolloClient() {

	const httpLink = createHttpLink({
		uri: 'https://demo.prod.shopsys.cloud/graphql/',
		//uri: 'https://private-e7f631-fwfeapi.apiary-mock.com/graphql?products',
	})

	const cache = new InMemoryCache()

	const apolloClient = new ApolloClient({
		link: httpLink,
		cache,
	});

	return apolloClient;
}

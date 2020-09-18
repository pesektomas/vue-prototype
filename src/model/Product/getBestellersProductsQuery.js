import gql from 'graphql-tag';

export const GET_BESTSELLERS_PRODUCTS = gql`query {
	products (first: 10) {
		edges {
			node {
				uuid,
				name,
				price {
					priceWithVat,
					priceWithoutVat,
					vatAmount
				},
				images {
					type,
					position,
					size,
					url,
					width,
					height
				}
			}
		}
	}
}`

import gql from 'graphql-tag';

export const GET_PRODUCTS_BY_CATEGORY = gql`query getProducts($uuid: Uuid!, $after: String) {
	category (uuid: $uuid) {
		products (first: 12, after: $after) {
			edges {
				node {
					uuid,
					name,
					shortDescription,
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
					},
					availability {
						name
					}
				}
			},
			pageInfo {
				hasNextPage,
				startCursor,
				endCursor
			}
		}
	}
}`

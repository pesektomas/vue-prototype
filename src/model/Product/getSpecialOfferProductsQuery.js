import gql from 'graphql-tag';

export const GET_SPECIAL_OFFER_PRODUCTS = gql`query {
	products (first: 3) {
		edges {
			node {
				uuid,
				name,
				shortDescription,
				stockQuantity,
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
				flags {
					name,
					rgbColor
				},
				availability {
					name
				},
				link
			}
		}
	}
}`;

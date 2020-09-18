import gql from 'graphql-tag';

export const GET_PRODUCT_DETAIL = gql`query getProduct($uuid: Uuid!) {
	product (uuid: $uuid) {
		uuid,
		name
		shortDescription
		link
		unit {
			name
		}
		availability {
			name
		}
		stockQuantity
		categories {
			name
		}
		flags {
			name
			rgbColor
		}
		price {
			priceWithVat
			priceWithoutVat
			vatAmount
		}
		images {
			type
			position
			size
			url
			width
			height
		}
	}
}`;

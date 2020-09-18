import gql from 'graphql-tag';

export const GET_PAYMENTS = gql`query {
	payments {
		uuid,
		name,
		description,
		instruction,
		position,
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
		transports {
			uuid,
			name
		}
	}
}`;

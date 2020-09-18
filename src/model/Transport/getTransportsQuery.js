import gql from 'graphql-tag';

export const GET_TRANSPORTS = gql`query {
	transports {
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
		payments {
			uuid,
			name
		}
	}
}`;

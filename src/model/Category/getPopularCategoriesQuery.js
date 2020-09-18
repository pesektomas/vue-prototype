import gql from 'graphql-tag';

export const GET_POPULAR_CATEGORIES = gql`query {
	categories {
		uuid,
		name,
		images {
			size
			url
			width
			height
		}
	}
}`;

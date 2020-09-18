import gql from 'graphql-tag';

export const GET_CATEGORIES_FOR_MAIN_MENU = gql`query {
	categories {
		uuid,
		name,
		children {
			uuid,
			name
		}
	}
}`;

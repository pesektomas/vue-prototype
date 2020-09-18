import gql from 'graphql-tag';

export const GET_CATEGORY_DETAIL = gql`query getCategory($uuid: Uuid!) {
	category (uuid: $uuid) {
		uuid,
		name,
		children {
			uuid,
			name,
			images {
				size
				url
				width
				height
			}
		},
		images {
			size
			url
			width
			height
		}
	}
}`

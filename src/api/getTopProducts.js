import axios from 'axios';
import { baseApiUrl } from './address';

export default async function getTopProducts(limit = 3) {
	try {
		const res = await axios.post(
			`${baseApiUrl}?products`, {
				query: `
					products (first: ${limit}) {
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
								link
							}
						}
					}
				`
			}
		);

		return res.data.data.products.edges;
	} catch (e) {
		console.log('err', e)
	}
}
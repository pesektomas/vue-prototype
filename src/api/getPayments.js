import axios from 'axios';
import { baseApiUrl } from './address';

export default async function getPayments() {
	try {
		const res = await axios.post(
			`${baseApiUrl}?payments`, {
				query: `
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
				`
			}
		);

		return res.data.data.payments;
	} catch (e) {
		console.log('err', e)
	}
}

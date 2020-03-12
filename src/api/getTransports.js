import axios from 'axios';
import { baseApiUrl } from './address';

export default async function getTransports() {
	try {
		const res = await axios.post(
			`${baseApiUrl}?transports`, {
				query: `
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
				`
			}
		);
		return res.data.data.transports;
	} catch (e) {
		console.log('err', e)
	}
}

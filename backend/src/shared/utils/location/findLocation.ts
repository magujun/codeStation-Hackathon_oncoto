import axios from 'axios';
import auth from '@src/config/auth';

interface StreetViewAPI {
	data: {
		copyright: string;
		date: string;
		location: {
			lat: number;
			lng: number;
		};
		pano_id: string;
		status: string;
	};
}

export default async function getRandomStreetView() {
	const coord = [Math.random() * 180 - 89, Math.random() * 360 - 179];
	const api_key = auth.SVS_key;
	const res: StreetViewAPI = await axios.get(
		`https://maps.googleapis.com/maps/api/streetview/metadata?location=${[
			...coord,
		]}&key=${api_key}&radius=50000&source=outdoor`
	);
	const response = res.data;
	console.log('StreetView results: ', response);
	if (response.status === 'OK') {
		if (response.copyright.includes('Google')) {
			return response.location;
		}
	}
	return await getRandomStreetView();
}

import 'dotenv/config';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import advancedFormat from 'dayjs/plugin/advancedFormat';
// import getRandomLocation from '@src/modules/services/locations/FindLocations';

import { app } from './app';

dayjs.extend(weekOfYear);
dayjs.extend(advancedFormat);

const PORT = 4321;
const timestamp = dayjs().format('HH:mm [of] dddd, MMM Do, YYYY, [Week] w');

app.listen(PORT, () =>
	console.log(
		' ⚡Node server proudly running on port ' + PORT + ' ⚡',
		'\n',
		'Since ' + timestamp,
		'\n'
	)
);

// getRandomLocation();

import 'dotenv/config';
import { app } from './app';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import weekOfYear from 'dayjs/plugin/weekOfYear';

import LoadLocations from '@src/shared/utils/location/loadLocations';

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

// LoadLocations(1);

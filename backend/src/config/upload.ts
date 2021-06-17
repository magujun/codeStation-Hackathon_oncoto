import crypto from 'crypto';
import multer from 'multer';
import { resolve } from 'path';

const tmpFolder = resolve(__dirname, '..', '..', 'storage');

export default {
	tmpFolder,
	storage: multer.diskStorage({
		destination: tmpFolder,
		filename: (request, file, callback) => {
			const fileHash = crypto.randomBytes(16).toString('hex');
			const fileName = `${fileHash}`;

			return callback(null, fileName);
		},
	}),
};

import { compare, hash } from 'bcryptjs';

async function Hash(original_key: any) {
	const key = original_key.toString();
	const hash_key = await hash(key, 8);
	try {
		const auth = await compare(key, hash_key);
		console.log(auth, key, hash_key);
	} catch {
		throw new Error('Invalid key/hash');
	}
}

Hash(123456789);

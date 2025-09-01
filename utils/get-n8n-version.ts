import fs from 'fs';
import { ApplicationError } from 'n8n-workflow';

export function getN8nVersion(): string {
	try {
		const pkgPath = require.resolve('n8n/package.json');
		const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
		return pkg.version;
	} catch (error) {
		throw new ApplicationError('Could not get n8n version');
	}
}

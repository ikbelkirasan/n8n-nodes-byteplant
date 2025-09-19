export function getN8nVersion(): string {
	const pkg = require('n8n/package.json') as {
		version: string;
	};
	return pkg.version ?? 'unknown';
}

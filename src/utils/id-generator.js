export function idGeneratorFactory() {
	let id = 0;

	const generate = () => id++;

	return {
		generate,
	};
}

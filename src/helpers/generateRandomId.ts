export default function generateRandomId() {
	function generateSegment() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	const segments = [
		generateSegment(),
		generateSegment(),
		generateSegment(),
		generateSegment(),
		generateSegment(),
	];

	return segments.join('-');
}

import notes from '../slices/sightreading/notes';

const calculateLedgerLines = (y: number): number[] => {
	const firstHighLedger = notes.A5;
	const firstLowLedger = notes.C4;

	const ledgerLines = <number[]>[];

	if (y <= firstHighLedger) {
		const distanceFromFirstLine = firstHighLedger - y;
		let needsLine = distanceFromFirstLine % 10 === 0;

		for (let i = 0; i <= distanceFromFirstLine; i += 5) {
			if (needsLine) {
				ledgerLines.push(i);
			}
			needsLine = !needsLine;
		}
	} else if (y >= firstLowLedger) {
		const distanceFromFirstLine = firstLowLedger - y;
		let needsLine = distanceFromFirstLine % 10 === 0;

		for (let i = 0; i >= distanceFromFirstLine; i -= 5) {
			if (needsLine) {
				ledgerLines.push(i);
			}
			needsLine = !needsLine;
		}
	}

	return ledgerLines;
};

export default calculateLedgerLines;

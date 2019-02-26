const tests = [
	{
		expected: '',
		input: ''
	},
	{
		expected: 'THWE.NWB,BW',
		input: 'And this is how the world ends. Not with a bang, but a whimper'
	},
	{
		expected: '',
		input: 'The On And Or At It'
	},
	{
		expected: 'TGIF!',
		input: 'Thank God it\'s Friday!'
	},
	{
		expected: '.',
		input: '    .    '
	},
]

const acro = (inputStr) => {
	let result = ''
	inputStr = inputStr || ''

	if (inputStr.length < 1) {
		return result
	}

	return result
}

for(const test of tests) {
	const result = acro(test.input)
	if (result === test.expected) {
		console.log(`%c Success for input "${test.input}"`, 'background: #0f0; color: #000')
	} else {
		console.warn(`%c Failed test for input "${test.input}"`, 'background: #f00; color: #fff')
	}
}

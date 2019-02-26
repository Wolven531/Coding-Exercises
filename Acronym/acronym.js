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

for (const test of tests) {
	const result = acro(test.input)
	if (result === test.expected) {
		console.log(`SUCCESS\n\tinput="${test.input}"\n\toutput ${result}`)
	} else {
		console.warn(` FAILED\n\tinput "${test.input}"\n\toutput "${result}"\n\texpected "${test.expected}"`)
	}
}

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

let failures = []
let failedTests = 0
let passedTests = 0
let successful = true

for (const test of tests) {
	const result = acro(test.input)
	if (result === test.expected) {
		passedTests++
		continue
		// console.log(`SUCCESS\n\tinput="${test.input}"\n\toutput ${result}`)
	}
	failedTests++
	successful = false
	failures.push(` FAILED\n\tinput "${test.input}"\n\toutput "${result}"\n\texpected "${test.expected}"`)
}

console.log(`~~~~~~~~~~  PASSES: ${failedTests}  ~~~~~~~~~~`)
if (!successful) {
	console.warn(`~~~~~~~~~~ FAILURES: ${failedTests} ~~~~~~~~~~`)
	for (const failure of failures) {
		console.warn(failure)
	}
}

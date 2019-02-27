const BANNED_WORDS = ['of', 'the', 'in', 'at', 'on', 'and', 'or', 'is', 'a', 'it']
const WORD_DELIMITER = ' '

const isSafe = word => !BANNED_WORDS.includes((word || '').toLowerCase())

const capitalizeThenDeAlphabetize = word => {
	word = (word || '').trim().replace(/it's/gi, 'its')

	if (word.length < 1) {
		return ''
	}

	const firstLetter = word[0].toUpperCase()
	const restOfString = word.substring(1).replace(/[A-z]/gi, '')

	return firstLetter + restOfString
}

const acro = inputStr => {
	inputStr = inputStr || ''

	if (inputStr.length < 1) {
		return ''
	}

	const words = inputStr.split(WORD_DELIMITER)

	return words.filter(isSafe).map(capitalizeThenDeAlphabetize).join('')
}

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

let failures = []

for (const test of tests) {
	const result = acro(test.input)

	if (result === test.expected) {
		continue
	}
	failures.push(` FAILED\n\tinput "${test.input}"\n\toutput "${result}"\n\texpected "${test.expected}"`)
}

const decoration = '~'.repeat(10)
console.log(`${decoration}  PASSES: ${tests.length - failures.length}  ${decoration}`)
console.log(`${decoration} FAILURES: ${failures.length} ${decoration}`)

for (const failure of failures) {
	console.warn(failure)
}

if (failures.length > 0) {
	return
}

console.log(`${decoration} ❤️ ALL PASSED! ❤️ ${decoration}`)

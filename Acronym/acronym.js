// import { printTestResults, runTests } from '../test-runner'
const testRunner = require('../test-runner')

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

const failures = testRunner.runTests(tests, acro)
testRunner.printTestResults(tests, failures)

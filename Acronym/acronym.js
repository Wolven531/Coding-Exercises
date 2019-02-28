// import { printTestResults, runTests } from '../test-runner'
const testRunner = require('../test-runner')

const BANNED_WORDS = [
	'a',
	'and',
	'at',
	'in',
	'is',
	'it',
	'of',
	'on',
	'or',
	'the'
]
const CONTRACTIONS = [
	{
		pattern: /it's/gi,
		replacement: 'its'
	}
]
const WORD_DELIMITER = ' '

const isSafe = word => !BANNED_WORDS.includes((word || '').toLowerCase())

const capitalizeThenDeAlphabetize = word => {
	word = (word || '').trim()

	for (const contraction of CONTRACTIONS) {
		word = word.replace(contraction.pattern, contraction.replacement)
	}

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

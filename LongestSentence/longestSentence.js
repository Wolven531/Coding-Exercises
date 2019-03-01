const testRunner = require('../test-runner')

const SENTENCE_DELIMITERS = [ '.', '?', '!' ]

const longestSen = inputStr => {
	inputStr = (inputStr || '').trim()

	if (inputStr.length < 1) {
		return 0
	}

	return 0
}

const tests = [
	{
		expected: 4,
		input: 'A test sentence. Does it work properly?'
	},
	{
		expected: 2,
		input: 'A curveball..Very strange . x x'
	},
	{
		expected: 2,
		input: ' Some Test? With... Edge Cases! '
	},
	{
		expected: 0,
		input: ''
	},
	{
		expected: 0,
		input: ' '
	}
]

const failures = testRunner.runTests(tests, longestSen)
testRunner.printTestResults(tests, failures)

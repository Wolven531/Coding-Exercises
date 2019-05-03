const testRunner = require('../test-runner')

const isMcNug = testNumber => {
	return false
}

const tests = [
	{
		expected: true,
		input: 10
	},
	{
		expected: false,
		input: 1
	},
	{
		expected: false,
		input: 2
	},
	{
		expected: false,
		input: 7
	},
	{
		expected: true,
		input: 100
	},
	{
		expected: true,
		input: 70
	}
]

const failures = testRunner.runTests(tests, isMcNug)
testRunner.printTestResults(tests, failures)

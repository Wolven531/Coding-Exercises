const testRunner = require('../test-runner')

const fibo = digit => {
	return 0
}

const tests = [
	{
		expected: 0,
		input: 0
	},
	{
		expected: 1,
		input: 1
	},
	{
		expected: 1,
		input: 2
	},
	{
		expected: 2,
		input: 3
	},
	{
		expected: 3,
		input: 4
	},
	{
		expected: 5,
		input: 5
	},
	{
		expected: 8,
		input: 6
	}
]

const failures = testRunner.runTests(tests, fibo)
testRunner.printTestResults(tests, failures)

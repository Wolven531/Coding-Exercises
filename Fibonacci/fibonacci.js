const testRunner = require('../test-runner')

const fibo = digit => {
	if (digit < 1) {
		return 0
	}
	if (digit < 3) {
		return 1
	}

	let num1 = 1
	let num2 = 1
	let sum

	for (let a = 2; a < digit; a++) {
		sum = num1 + num2
		num1 = num2
		num2 = sum
	}

	return sum
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

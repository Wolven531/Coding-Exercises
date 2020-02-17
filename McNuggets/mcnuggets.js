const testRunner = require('../test-runner')

const MCNUGGET_SIZES = [20, 9, 6, 4]
// const MCNUGGET_SIZES = [4, 6, 9, 20]

const isMcNug = testNumber => {
	// NOTE: number is too small
	if (testNumber < 4) {
		return false
	}

	// NOTE: if any sizes fit nicely
	if (MCNUGGET_SIZES.some(mcNuggetNum => testNumber % mcNuggetNum === 0)) {
		return true
	}

	let runningRemainder = testNumber

	MCNUGGET_SIZES.forEach(mcNuggetNum => {
		if (runningRemainder === 0) {
			return
		}
		if (mcNuggetNum <= runningRemainder ) {
			runningRemainder -= mcNuggetNum
		}
	})

	return runningRemainder === 0
}

const tests = [
	{
		expected: true,
		input: 10
	},
	{
		expected: true,
		input: 13
	},
	{
		expected: true,
		input: 19
	},
	{
		expected: true,
		input: 26
	},
	{
		expected: true,
		input: 39
	},
	{
		expected: true,
		input: 8
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
		input: 109
	},
	{
		expected: true,
		input: 70
	}
]

const failures = testRunner.runTests(tests, isMcNug)
testRunner.printTestResults(tests, failures)

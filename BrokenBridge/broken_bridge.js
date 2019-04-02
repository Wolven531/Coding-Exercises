const testRunner = require('../test-runner')

const brokenBridge = bridge => {
	return true
}

const tests = [
	{
		expected: true,
		input: {
			bridge: [1, 0, 0, 1],
			planks: [1]
		}
	},
	{
		expected: true,
		input: {
			bridge: [1, 0, 0, 1],
			planks: [1, 2]
		}
	},
	{
		expected: false,
		input: {
			bridge: [1, 0, 0, 1],
			planks: []
		}
	},
	{
		expected: true,
		input: {
			bridge: [1, 0, 1, 1],
			planks: []
		}
	},
	{
		expected: true,
		input: {
			bridge: [1, 0, 1, 0, 1, 0, 1, 0, 1],
			planks: []
		}
	},
	{
		expected: true,
		input: {
			bridge: [1, 0, 0, 0, 0, 0, 0, 1],
			planks: [5, 1, 2]
		}
	},
	{
		expected: false,
		input: {
			bridge: [1, 0, 0, 0, 0, 0, 0, 1],
			planks: [4, 1, 2, 3, 4]
		}
	},
	{
		expected: false,
		input: {
			bridge: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
			planks: [1, 1]
		}
	},
	{
		expected: true,
		input: {
			bridge: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
			planks: [1, 1, 1]
		}
	},
	{
		expected: true,
		input: {
			bridge: [1, 0, 0, 1, 1, 0, 0, 0, 1],
			planks: [1, 2]
		}
	},
	{
		expected: false,
		input: {
			bridge: [1, 0, 0, 1, 1, 0, 0, 0, 1],
			planks: [1, 1]
		}
	},
	{
		expected: true,
		input: {
			bridge: [1, 0, 0, 1, 1, 1, 0, 0, 1],
			planks: [1, 1]
		}
	},
	{
		expected: true,
		input: {
			bridge: [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
			planks: [1, 3, 1]
		}
	},
	{
		expected: true,
		input: {
			bridge: [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
			planks: [1, 3, 1, 5, 5]
		}
	},
	{
		expected: false,
		input: {
			bridge: [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
			planks: [1, 2, 2]
		}
	},
]
// TODO: create custom test runner for multi-param tests
// const failures = testRunner.runTests(tests, brokenBridge)
// testRunner.printTestResults(tests, failures)

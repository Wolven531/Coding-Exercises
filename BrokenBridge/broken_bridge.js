const testRunner = require('../test-runner')

const BROKEN = 0
const USABLE = 1

const brokenBridge = (bridge, planks) => {
	let sortedRemainingPlanks = planks.sort() // sort ascending (e.g. [1,2])

	let lengthOfHole = 0
	for (let a = 0; a < bridge.length; a++) {
		const currentSpot = bridge[a]
		// console.log(`Viewing index=${a} spot=${currentSpot} currentLengthOfHole=${lengthOfHole} sortedRemainingPlanks=${JSON.stringify(sortedRemainingPlanks)}`)

		// increase hole length and move forward
		if (currentSpot === BROKEN) {
			lengthOfHole++
			continue
		}
		// looking at a usable spot, and hole is cross-able, so move forward
		if (lengthOfHole < 2) {
			lengthOfHole = 0
			continue
		}

		// hole is 2 or more at this point
		let indexOfSuitable = -1
		for (let b = 0; b < sortedRemainingPlanks.length; b++) {
			if (sortedRemainingPlanks[b] >= lengthOfHole - 1) {
				indexOfSuitable = b
				break
			}
		}

		if (indexOfSuitable > -1) {
			sortedRemainingPlanks = [
				...sortedRemainingPlanks.slice(0, indexOfSuitable),
				...sortedRemainingPlanks.slice(indexOfSuitable + 1)
			]
			lengthOfHole = 0
			continue
		}

		return false
	}

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
	}
]

const failures = []

tests.forEach(test => {
	const result = brokenBridge(test.input.bridge, test.input.planks)

	if (result === test.expected) {
		return
	}
	failures.push(` FAILED\n\tinput "${JSON.stringify(test.input)}"\n\toutput "${result}"\n\texpected "${test.expected}"`)
})

// const failures = testRunner.runTests(tests, brokenBridge)
testRunner.printTestResults(tests, failures)

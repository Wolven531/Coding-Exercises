const testRunner = require('../test-runner')

const BROKEN = 0
const USABLE = 1

const canFixHole = (lengthOfHole, sortedRemainingPlanks) => {
	if (lengthOfHole > 1 && sortedRemainingPlanks.length === 0) {
		return false
	}
	return true
}

const brokenBridge = (bridge, planks) => {
	let sortedRemainingPlanks = planks.sort()// sort ascending (e.g. [1,2])
	// console.log(`sortedRemainingPlanks = ${sortedRemainingPlanks}`)

	let lengthOfHole = 0
	for (let a = 0; a < bridge.length; a++) {
		const currentSpot = bridge[a]
		console.log(`Viewing index=${a} spot=${currentSpot} currentLengthOfHole=${lengthOfHole}`)
		
		// increase hole length and move forward
		if (currentSpot === BROKEN) {
			console.log(`Found broken, increasing hole length and moving forward...`)
			lengthOfHole++
			continue
		}
		// looking at a usable spot, and hole is cross-able, so move forward
		if (lengthOfHole < 2) {
			console.log(`Found usable, hole is cross-able, resetting hole length and moving forward...`)
			lengthOfHole = 0
			continue
		}
		// last hole not cross-able and no planks left
		if (!canFixHole(lengthOfHole, sortedRemainingPlanks)) {
			console.log(`Last hole not cross-able and no planks left, bailing...`)
			return false
		}
		// // hole is 2 or more
		// for (let b = 0; b < sortedRemainingPlanks; b++) {
		// 	if (sortedRemainingPlanks[b] >= lengthOfHole) {
		// 		sortedRemainingPlanks = [
		// 			...sortedRemainingPlanks.slice(0, b),
		// 			...sortedRemainingPlanks.slice(b + 1)
		// 		]
		// 		lengthOfHole = 0
		// 		break
		// 	}
		// }
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
	},
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

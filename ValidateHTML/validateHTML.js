const testRunner = require('../test-runner')

const validateHTML = inputStr => {
	const specMap = {
		'<': '>',
		'[': ']',
		'{': '}'
	}
	const interestedTokens = Object.keys(specMap)
	const breakers = interestedTokens.map(function(curr) {
		return specMap[curr]
	})
	let leftInd = 0
	if (inputStr.length === 0) {
		return true
	}
	if (inputStr.length === 1 &&
		(interestedTokens.indexOf(inputStr[leftInd]) > -1 ||
			breakers.indexOf(inputStr[leftInd]) > -1)) {
		// short circuit for only opens (e.g. '<', '>')
		return false
	}
	let rightInd = inputStr.length - 1
	while (leftInd < rightInd) {
		const trigger = inputStr[leftInd]
		if (breakers.indexOf(trigger) > -1) {
			return false
		}
		if (interestedTokens.indexOf(trigger) > -1) {
			// found a trigger
			let foundMatch = false
			while (rightInd > leftInd && !foundMatch) {
				// start at the right/outside to search
				const comp = inputStr[rightInd]
				if (comp === specMap[trigger]) {
					// is it the match?
					foundMatch = true
				}
				rightInd--
			}
			if (!foundMatch) {
				return false // we couldn't close the current search
			}
		}
		if (leftInd === rightInd) {
			// short circuit for even matches (e.g. '<>')
			break
		}
		leftInd++ // either we jumped out early for no match, or we're still going, so advance
	}
	return leftInd === rightInd && breakers.indexOf(inputStr[rightInd]) === -1
}

var tests = [
	{
		expected: true,
		input: null
	}, // null case
	{
		expected: true
	}, // undefined case; could use { input: undefined, expected: true }
	{
		expected: true,
		input: ''
	},
	{
		expected: true,
		input: 'a'
	},
	{
		expected: false,
		input: '<'
	},
	{
		expected: false,
		input: '>'
	},
	{
		expected: false,
		input: '><'
	},
	{
		expected: false,
		input: '<<'
	},
	{
		expected: false,
		input: '>>'
	},
	{
		expected: true,
		input: '<>'
	},
	{
		expected: false,
		input: '<a'
	},
	{
		expected: false,
		input: 'a>'
	},
	{
		expected: true,
		input: '<a>'
	},
	{
		expected: false,
		input: '<<a>'
	},
	{
		expected: true,
		input: '<<a>>'
	},
	{
		expected: true,
		input: '<{a}>'
	},
	{
		expected: true,
		input: '<<{a}>>'
	},
	{
		expected: false,
		input: '<<{a>}>'
	},
	{
		expected: false,
		input: '<<{a>>}'
	}
]

const failures = testRunner.runTests(tests, validateHTML)
testRunner.printTestResults(tests, failures)

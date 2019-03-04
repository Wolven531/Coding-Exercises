const testRunner = require('../test-runner')

const SPECIAL_CHARACTER_MAP = {
	'<': '>',
	'[': ']',
	'{': '}'
}

const isBreaker = searchKey => {
	const tokens = Object.keys(SPECIAL_CHARACTER_MAP)
	const breakers = tokens.map(curr => SPECIAL_CHARACTER_MAP[curr])
	return breakers.indexOf(searchKey) > -1
}

const isInteresting = searchKey => {
	const tokens = Object.keys(SPECIAL_CHARACTER_MAP)
	return tokens.indexOf(searchKey) > -1
}

const validateHTML = inputStr => {
	inputStr = inputStr || ''

	if (inputStr.length === 0) {
		return true
	}
	if (
		inputStr.length === 1 &&
		(isInteresting(inputStr[0]) || isBreaker(inputStr[0]))
	) {
		return false
	}
	let leftInd = 0
	let rightInd = inputStr.length - 1

	while (leftInd < rightInd) {
		const trigger = inputStr[leftInd]
		if (isBreaker(trigger)) {
			return false
		}
		// found a trigger
		if (isInteresting(trigger)) {
			let foundMatch = false
			while (rightInd > leftInd && !foundMatch) {
				const comp = inputStr[rightInd] // start at the right/outside to search
				if (comp === SPECIAL_CHARACTER_MAP[trigger]) {
					foundMatch = true // is it the match?
				}
				rightInd--
			}
			if (!foundMatch) {
				return false // we couldn't close the current search
			}
		}
		// short circuit for even matches (e.g. '<>')
		if (leftInd === rightInd) {
			break
		}
		leftInd++ // either we jumped out early for no match, or we're still going, so advance
	}
	return leftInd === rightInd && !isBreaker(inputStr[rightInd])
}

const tests = [
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

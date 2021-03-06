const testRunner = require('../test-runner')

const SENTENCE_DELIMITERS = [ '.', '?', '!' ]

const longestSen = inputStr => {
	inputStr = (inputStr || '').trim()

	let currentSentenceNumberWords = 0
	let longestSentence = 0
	
	const letters = inputStr.split('')

	if (letters.length === 0) {
		return 0
	}
	if (!letters.some(letter => SENTENCE_DELIMITERS.indexOf(letter) > -1)) {// NO delimiters, it is one sentence
		return 1
	}

	letters.forEach(letter => {
		if (SENTENCE_DELIMITERS.indexOf(letter) > -1) {
			if (currentSentenceNumberWords > longestSentence) {
				longestSentence = currentSentenceNumberWords
			}
			currentSentenceNumberWords = 0
		} else if (letter === ' ') {
			currentSentenceNumberWords++
		}
	})

	return longestSentence
}

const tests = [
	{ expected: 4, input: 'A test sentence. Does it work properly?' },
	{ expected: 2, input: 'A curveball..Very strange . x x' },
	{ expected: 2, input: ' Some Test? With... Edge Cases! ' },
	{ expected: 1, input: 'asdf' },
	{ expected: 0, input: '' },
	{ expected: 0, input: ' ' }
]

const failures = testRunner.runTests(tests, longestSen)
testRunner.printTestResults(tests, failures)

const runTests = (tests, fixture) => {
	const failures = []

	tests.forEach(test => {
		const result = fixture(test.input)

		if (result === test.expected) {
			return
		}
		failures.push(` FAILED\n\tinput "${test.input}"\n\toutput "${result}"\n\texpected "${test.expected}"`)
	})

	return failures
}

const printTestResults = (tests, failures) => {
	const decoration = '~'.repeat(10)
	console.log(`${decoration}      PASSES: ${tests.length - failures.length}     ${decoration}`)
	console.log(`${decoration}     FAILURES: ${failures.length}    ${decoration}`)

	failures.forEach(failure => console.warn(failure))

	if (failures.length > 0) {
		return
	}

	console.log(`${decoration}  ❤️  ALL PASSED! ❤️  ${decoration}`)
}

// export {
// 	printTestResults,
// 	runTests
// }

module.exports = {
	printTestResults,
	runTests
}

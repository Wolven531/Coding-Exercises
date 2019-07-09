'''
	@param string input_str The string to attempt to convert to acronym
	@returns string The result of converting the input string to an acronym
'''
def acro(input_str: str):
	return input_str

'''
	@param list<tuple(input, expected_output)> tests A list of tuples, each containing an input and expected output
	@returns None
'''
def run_tests(tests):
	for test_num, test in enumerate(tests, start=1):
		test_input = test[0]
		test_expected = test[1]
		test_result = acro(test_input)
		print(f'{test_num}.) acro("{test_input}") = "{test_result}"\t expected "{test_expected}"')
		assert test_result == test_expected, f'test {test_num} failed; expected "{test_expected}"'

tests = [
	('', ''),
	('.', '.')
]

run_tests(tests)

non_acro_words = ['a', 'and', 'at', 'in', 'is', 'it', 'of', 'on', 'or', 'the']
symbols_to_keep = [',', '.', '!']

'''
	@param string input_str The string to attempt to convert to acronym
	@returns string The result of converting the input string to an acronym
'''
def acro(input_str):
	if (len(input_str) < 1):
		return input_str

	words = input_str.split(' ')
	result = ''

	for word in words:
		if (len(word) < 1 or word.lower() in non_acro_words):
			continue
		if (len(word) > 1):
			result += word[0].capitalize()
		if (word[-1] in symbols_to_keep):
			result += word[-1]

	return result

'''
	@param list<tuple(input, expected_output)> tests A list of tuples, each containing an input and expected output
	@returns None
'''
def run_tests(tests):
	for test_num, test in enumerate(tests, start=1):
		test_input = test[0]
		test_expected = test[1]
		test_result = acro(test_input)
		print(f'{test_num}.) acro("{test_input}") = "{test_result}"')
		assert test_result == test_expected, f'test {test_num} failed; expected "{test_expected}"'

tests = [
	('', ''),
	('.', '.'),
	('And this is how the world ends. Not with a bang, but a whimper', 'THWE.NWB,BW'),
	('The On And Or At It', ''),
	("Thank God it's Friday!", 'TGIF!'),
	('    .    ', '.')
]

run_tests(tests)

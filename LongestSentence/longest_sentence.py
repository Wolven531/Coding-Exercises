def longest_sentence(input_str):
	if len(input_str) < 1:
		return 0

	words = input_str.split(' ')

	return len(words)

def run_tests(tests):
	for test_num, test in enumerate(tests, start=1):
		test_input = test[0]
		test_expected = test[1]
		test_result = longest_sentence(test_input)
		print(f'{test_num}.) longest_sentence("{test_input}") = "{test_result}"')
		assert test_result == test_expected, f'test {test_num} failed; expected "{test_expected}"'
	num_tests = len(tests)
	print(f'\nAll {num_tests} tests passed!\n')

tests = [
	('A test sentence. Does it work properly?', 4),
	('A curveball..Very strange . x x', 2),
	(' Some Test? With... Edge Cases! ', 2),
	('', 0),
	(' ', 0)
]

run_tests(tests)

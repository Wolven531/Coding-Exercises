sentence_delims = ['.', '?', '!']

def next_sentence(input_str):
	sentence = ''
	remaining = ''

	if len(input_str) < 1:
		return (sentence, remaining)

	remaining_start = 0

	for char in input_str:
		remaining_start += 1
		if char in sentence_delims:
			remaining = input_str[remaining_start:]
			break
		else:
			sentence += char

	sentence = sentence.strip()

	return (sentence, remaining)


def longest_sentence(input_str):
	longest = 0

	if len(input_str) < 1:
		return longest

	sentence_info = next_sentence(input_str)

	while sentence_info[0] is not '':
		words = sentence_info[0].split(' ')
		sentence_length = len(words)

		if sentence_length > longest:
			longest = sentence_length

		sentence_info = next_sentence(sentence_info[1])

	return longest

def run_tests(tests):
	test_count = len(tests)
	for test_num, test in enumerate(tests, start=1):
		test_input = test[0]
		test_expected = test[1]
		test_result = longest_sentence(test_input)
		print(f'{test_num}.) longest_sentence("{test_input}") = {test_result}')
		assert test_result == test_expected, f'test {test_num} failed; expected {test_expected}'
	print(f'\nAll {test_count} tests passed!\n')

tests = [
	('A test sentence. Does it work properly?', 4),
	('A curveball..Very strange . x x', 2),
	(' Some Test? With... Edge Cases! ', 2),
	('asdf', 1),
	('', 0),
	(' ', 0)
]

run_tests(tests)

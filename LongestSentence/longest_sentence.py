sentence_delims = ['.', '?', '!']

def get_next_sentence(input_str):
	sentence = ''
	char_index = 0

	if len(input_str) < 1:
		return (sentence, char_index)

	for char in input_str:
		if char in sentence_delims:
			break
		else:
			sentence += char
		char_index += 1

	sentence = sentence.strip()
	print('returning sentence="' + sentence + '" and char_index=' + str(char_index))

	return (sentence, char_index)


def longest_sentence(input_str):
	longest = 0
	if len(input_str) < 1:
		return longest

	sentence_info = get_next_sentence(input_str)

	while sentence_info[0] is not '':
		words = sentence_info[0].split(' ')
		print('considering s=' + sentence_info[0] + ', words=' + ','.join(words))
		sentence_length = len(words)

		if sentence_length > longest:
			longest = sentence_length

		remaining = input_str[sentence_info[1] + 1:]

		print('remaining="' + remaining + '"')

		sentence_info = get_next_sentence(remaining)

	return longest

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
	# ('A test sentence. Does it work properly?', 4),
	# ('A curveball..Very strange . x x', 2),
	# (' Some Test? With... Edge Cases! ', 2),
	('asdf', 1),
	('', 0),
	(' ', 0)
]

run_tests(tests)

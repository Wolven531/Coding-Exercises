def longest_sentence(input_str):
	if len(input_str) < 1:
		return 0

	words = input_str.split(' ')

	return len(words)

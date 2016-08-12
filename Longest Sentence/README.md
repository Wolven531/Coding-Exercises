# Longest Sentence

- Create a function that counts the highest number of words in a sentence.
  - The function signature: longestSen(s)
    - s will be a string (not null or any other object)
    - s may be empty
    - Sentences are delimited by the following characters: ['.', '?', '!']
    - Words are delimited by a space (' ')
    - Zero length words are not counted ('' should not add to the number of words in a sentence)
    - The function returns an int representing the number of words in the longest sentence

## Examples:

- longestSen('A test sentence. Does it work properly?') === 4
- longestSen('A curveball..Very strange . x x' === 2
- longestSen(' Some Test? With... Edge Cases! ' === 2
- longestSen('') === 0
- longestSen(' ') === 0

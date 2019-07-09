# Acronym

- The function signature: `acro(string inputStr)`
- Create a function that [acronymizes](https://en.wiktionary.org/wiki/acronymize) a sentence
  - The following words are not to be represented in the final result: ['of', 'the', 'in', 'at', 'on', 'and', 'or', 'is', 'a', 'it']
  - Words are delimited by a space (' ')
  - Contractions are accepted and must be treated as an entire word (e.g. "it's" and "its" both become "I" - the word is NOT removed even though it contains the forbidden word, "it")
  - The final result should be all uppercase
  - The final result should have no spaces
  - Leave all non-alphabetic characters besides space as they are

## Examples

- acro('') === ''
- acro('.') === '.'
- acro('And this is how the world ends. Not with a bang, but a whimper') === 'THWE.NWB,BW'
- acro('The On And Or At It') === ''
- acro('Thank God it's Friday!') === 'TGIF!'
- acro('    .    ') === '.'

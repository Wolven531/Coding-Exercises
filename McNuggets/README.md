# McNuggets

McNuggets are sold in boxes that consist of four distinct quantities: four (`4`), six (`6`), nine (`9`), and twenty (`20`). A number `n` is considered a McNuggets number if `n` nuggets can be accumulated through some combination of the four afore-mentioned quantities. For example, ten `10` is considered a McNuggets number because we can obtain `10` by adding `4` and `6` (i.e. `10 = 4 + 6`). The number seven (`7`) is not because no combination of McNuggets sizes will equal seven.

## Challenge 1 - McNugget Tester

- The function signature: `isMcNug(integer testNumber)`
- Return `true` if the `testNumber` is a McNuggets number; `false` otherwise
- `testNumber` will be an integer value, greater than or equal to zero

### Challenge 1 Examples

- isMcNug(10) === true
- isMcNug(7) === false

## Challenge 2 - McNugget Number Generator

- The function signature: `mcNugs(integer nDigits)`
- Given an integer value greater than or equal to one named `nDigits` (i.e. `nDigits >= 1`), return the first `nDigits` McNuggets numbers

### Challenge 2 Examples

- mcNugs(1) === [4]
- mcNugs(2) === [4,6]
- mcNugs(4) === [4,6,8,9]
- mcNugs(8) === [4,6,8,9,10,12,13,14]

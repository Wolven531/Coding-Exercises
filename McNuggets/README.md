# McNuggets

McNuggets are sold in boxes that consist of four distinct quantities: four (`4`), six (`6`), nine (`9`), and twenty (`20`). A number `n` is considered a McNuggets number if `n` nuggets can be accumulated through some combination of the four afore-mentioned quantities. For example, ten `10` is considered a McNuggets number because we can obtain `10` by adding `4` and `6` (i.e. `10 = 4 + 6`). The number seven (`7`) is not because no combination of McNuggets sizes will equal seven.

## Challenge 1 - McNugget Tester

- The function signature: `isMcNug(integer testNumber)`
- Return `true` if the `testNumber` is a McNuggets number; `false` otherwise
- `testNumber` will be an integer value, greater than or equal to zero

### Challenge 1 Examples

- isMcNug(10) === true
- isMcNug(7) === false

# CodingProblems

## Validate HTML

Provide an algorithm that will be able to verify a string of input has the same number and scope of special opening and closing characters. (Like &lt; and &gt; in HTML). Your function should handle null, undefined, zero length, one or more length strings.

The following characters are special

-   `<` is the opening symbol for `>`
-   `[` is the opening symbol for `]`
-   `{` is the opening symbol for `}`

Use the following tests cases to verify your input

```javascript
var tests = [
	{ str: null, expected: true }, // null case
	{ expected: true }, // undefined case; could use { str: undefined, expected: true }
	{ str: '', expected: true },
	{ str: 'a', expected: true },
	{ str: '<', expected: false },
	{ str: '>', expected: false },
	{ str: '><', expected: false },
	{ str: '<<', expected: false },
	{ str: '>>', expected: false },
	{ str: '<>', expected: true },
	{ str: '<a', expected: false },
	{ str: 'a>', expected: false },
	{ str: '<a>', expected: true },
	{ str: '<<a>', expected: false },
	{ str: '<<a>>', expected: true },
	{ str: '<{a}>', expected: true },
	{ str: '<<{a}>>', expected: true },
	{ str: '<<{a>}>', expected: false },
	{ str: '<<{a>>}', expected: false }
]
tests.forEach(function(curr) {
	var result = curr.str ? curr.str.isValid() : isValid(curr.str)
	console.log('Is "' + curr.str + '" valid? ', result)
	if (result === curr.expected) {
		console.log('Pass')
	} else {
		console.error('Fail')
	}
})
```

# CodingProblems

## Validate HTML

Provide an algorithm that will be able to verify a string of input has the same number and scope of special opening and closing characters. (Like &lt; and &gt; in HTML). Your function should handle null, undefined, zero length, one or more length strings.

The following characters are special

-   `<` is the opening symbol for `>`
-   `[` is the opening symbol for `]`
-   `{` is the opening symbol for `}`

## Signature

`validateHTML(string inputStr)`

## Tests

Use the following tests cases to verify your input

```javascript
var tests = [
	{
		expected: true,
		input: null
	}, // null case
	{
		expected: true
	}, // undefined case; could use { input: undefined, expected: true }
	{
		expected: true,
		input: ''
	},
	{
		expected: true,
		input: 'a'
	},
	{
		expected: false,
		input: '<'
	},
	{
		expected: false,
		input: '>'
	},
	{
		expected: false,
		input: '><'
	},
	{
		expected: false,
		input: '<<'
	},
	{
		expected: false,
		input: '>>'
	},
	{
		expected: true,
		input: '<>'
	},
	{
		expected: false,
		input: '<a'
	},
	{
		expected: false,
		input: 'a>'
	},
	{
		expected: true,
		input: '<a>'
	},
	{
		expected: false,
		input: '<<a>'
	},
	{
		expected: true,
		input: '<<a>>'
	},
	{
		expected: true,
		input: '<{a}>'
	},
	{
		expected: true,
		input: '<<{a}>>'
	},
	{
		expected: false,
		input: '<<{a>}>'
	},
	{
		expected: false,
		input: '<<{a>>}'
	}
]
tests.forEach(curr => {
	var result = validateHTML(curr.input)
	console.log(`Is "${curr.input}" valid? `, result)

	if (result === curr.expected) {
		console.log('Pass')
	} else {
		console.error('Fail')
	}
})
```

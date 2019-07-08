'''
    @param string input_str The string to attempt to convert to acronym
    @returns string The result of converting the input string to an acronym
'''
# @staticmethod
def acro(input_str: str):
    return input_str

# @staticmethod
# def run_tests:
#     assert (acro('') === ''), 'test 1 failed'

# run_tests()

test_one_expected = ''
test_one_result = acro('')
print(f'acro of "" = "{test_one_result}", expected "{test_one_expected}"')
assert test_one_result == test_one_expected, f'test one failed; expected "{test_one_expected}"'

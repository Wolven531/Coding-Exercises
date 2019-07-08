'''
    @param string input_str The string to attempt to convert to acronym
    @returns string The result of converting the input string to an acronym
'''
def acro(input_str: str):
    return input_str

def run_tests():
    test_one_expected = ''
    test_one_result = acro('')
    print(f'1.) acro("") = "{test_one_result}"\t expected "{test_one_expected}"')
    assert test_one_result == test_one_expected, f'test one failed; expected "{test_one_expected}"'

    test_two_expected = '.'
    test_two_result = acro('.')
    print(f'2.) acro(".") = "{test_two_result}"\t expected "{test_two_expected}"')
    assert test_two_result == test_two_expected, f'test two failed; expected "{test_two_expected}"'

run_tests()

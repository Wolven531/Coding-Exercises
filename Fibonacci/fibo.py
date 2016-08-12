def main():
    digit = int(input('Which digit of fibo?\n'))
    print('''
            Iterative: {}
            Recursive: {}
              Dynamic: {}
    '''.format(fibo(digit), fibo_recur(digit), fibo_dyn(digit)))

def fibo(num):
    num1 = 1
    num2 = 1
    result = 0 if num < 1 else 1
    ind = 2
    while ind < num:
        result = num1 + num2
        num1 = num2
        num2 = result
        ind += 1
    return result

def fibo_recur(num):
    if num < 1:
        return 0
    if num < 3:
        return 1
    return fibo_recur(num - 1) + fibo_recur(num - 2)

def fibo_dyn(num):
    vals = [1, 1]
    if num < 1:
        return 0
    while len(vals) < num:
        curr_len = len(vals)
        vals.append(vals[curr_len - 1] + vals[curr_len - 2])
    return vals[num - 1]

main()

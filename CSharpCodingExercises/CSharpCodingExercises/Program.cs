using System;

namespace CSharpCodingExercises
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Calculating Fibonacci numbers...");
            //Console.WriteLine($"The result of Fibo(1) = ${Fibonacci.FiboIter(1)}");
            //Console.WriteLine($"The result of Fibo(2) = ${Fibonacci.FiboIter(2)}");
            //Console.WriteLine($"The result of Fibo(3) = ${Fibonacci.FiboIter(3)}");
            //Console.WriteLine($"The result of Fibo(4) = ${Fibonacci.FiboIter(4)}");

            Console.WriteLine("Running FizzBuzz...");
            FizzBuzz();
        }

        // Write a short program that
        //      prints each number from 1 to 100 on a new line
        //        - For each multiple of 3, print "Fizz" instead of the number
        //        - For each multiple of 5, print "Buzz" instead of the number
        //        - For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number
        private static void FizzBuzz()
        {
            for(var a = 1; a <= 100; a++)
            {
                if(a % 3 == 0 && a % 5 == 0)
                {
                    Console.WriteLine("FizzBuzz");
                    continue;
                }
                if (a % 5 == 0)
                {
                    Console.WriteLine("Buzz");
                    continue;
                }
                if (a % 3 == 0)
                {
                    Console.WriteLine("Fizz");
                    continue;
                }
                Console.WriteLine(a);
            }
        }
    }
}

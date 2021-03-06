﻿using System;

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
            FizzBuzz.Execute();

            Console.WriteLine("Running factors of 669...");
            PrimeNumbers.Factors(669);
            Console.WriteLine("Running factors of 20...");
            PrimeNumbers.Factors(20);
            Console.WriteLine("Running factors of 3...");
            PrimeNumbers.Factors(3);
            Console.WriteLine("Running factors of 2...");
            PrimeNumbers.Factors(2);
        }
    }
}

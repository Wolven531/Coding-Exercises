using System;

namespace CSharpCodingExercises
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Calculating Fibonacci number 1, 2, 3, 4...");
            int result1 = Fibonacci.FiboIter(1);
            int result2 = Fibonacci.FiboIter(2);
            int result3 = Fibonacci.FiboIter(3);
            int result4 = Fibonacci.FiboIter(4);
        }
    }
}

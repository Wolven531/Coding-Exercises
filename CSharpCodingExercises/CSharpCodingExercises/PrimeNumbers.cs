using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpCodingExercises
{
    public class PrimeNumbers
    {
        // Print all prime factors of a given number n > 1
        public static void Factors(int n)
        {
            // Print each 2 that divides n 
            while (n % 2 == 0)
            {
                Console.WriteLine(2 + " ");
                n /= 2;
            }

            // n MUST be odd at this point; never compare an even (note += 2)
            for (var i = 3; i <= Math.Sqrt(n); i += 2)
            {
                // While i divides n, print i and divide n 
                while (n % i == 0)
                {
                    Console.WriteLine(i + " ");
                    n /= i;
                }
            }

            // Handle n is a prime number greater than 2 
            if (n > 2)
            {
                Console.WriteLine(n);
            }
        }
    }
}

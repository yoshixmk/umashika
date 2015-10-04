defmodule Prime do
  def isPrime(num) do
        if num==1 || rem(num, 2)==0 do
            false
        else
            x = makeList(trunc(:math.sqrt(num)), [])
            sieve(x, num)
        end
    end
    def sieve([h|t], num) do
        if rem(num,h)==0 do false
        else sieve(t, num)
        end
    end
    def sieve([], _) do true
    end
    def makeList(num, result) do
        if num==2 do result
        else makeList(num-1, [num|result])
        end
    end
end

Enum.each((1..100), fn x -> IO.write(Prime.isPrime(x)) end)
defmodule Primality do
  def eratosthenes(n) do
    sieve = Enum.map(2..n, fn(x) -> x end)
    result = []
    eratosthenes(n, sieve, result)
  end

  def eratosthenes(n, sieve, result) do
    if Enum.at(sieve, 0) <= :math.sqrt(n) do
      [head|sieve] = sieve
      result = result ++ [head]
      sieve = Enum.filter(sieve, fn x -> rem(x, Enum.at(result, -1)) != 0 end)
      eratosthenes(n, sieve, result)
    else
      result ++ sieve
    end
  end
end

Primality.eratosthenes(1000) |> Enum.each(fn(x) -> Integer.to_string(x)<>" " |>  IO.write end)
IO.puts ""
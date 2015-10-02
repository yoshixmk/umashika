fizz_bazz = fn x ->
  cond do
    rem(x, 15) == 0 -> "FizzBazz "
    rem(x, 3) == 0 -> "Fizz "
    rem(x, 5) == 0 -> "Bazz "
    true -> Integer.to_string(x)<>" "
  end
end
Enum.each((1..100), fn x -> IO.write(fizz_bazz.(x)) end)
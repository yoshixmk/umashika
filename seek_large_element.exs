defmodule Recursion do
  def print_multiple_times(array, ary, n) when n <= 1 do
    max = Enum.max(ary)
    max_index = Enum.find_index(array, fn x -> x == max end) |> Integer.to_string()
    IO.puts arrow_join(max_index, max |> Integer.to_string())
  end

  def print_multiple_times(array, ary, n) do
    max = Enum.max(ary)
    max_index = Enum.find_index(array, fn x -> x == max end) |> Integer.to_string()
    IO.puts arrow_join(max_index, max |> Integer.to_string())
    print_multiple_times(array, Enum.reject(ary, fn x -> x == max end), n - 1)
  end

  def arrow_join(a, b) do
    a <> " -> " <> b
  end
end

array = [12, 6, 8, 3, 10, 1, 0, 9]
Recursion.print_multiple_times(array, array, 3)
# 配列に負でない整数が格納されている。これらの整数の中から大きい順に3つの数字とその添字を出力せよ。

defmodule Recursion do
  def print_multiple_times(array, ary, n) when n <= 1 do
    max = Enum.max(ary)
    index = Enum.find_index(array, fn x -> x == max end) |> Integer.to_string()
    arrow_join_puts(index, max |> Integer.to_string())
  end

  def print_multiple_times(array, ary, n) do
    max = Enum.max(ary)
    index = Enum.find_index(array, fn x -> x == max end) |> Integer.to_string()
    arrow_join_puts(index, max |> Integer.to_string())
    print_multiple_times(array, Enum.reject(ary, fn x -> x == max end), n - 1)
  end

  def maxvalue_with_index(array, n) do
    print_multiple_times(array, array, n)
  end

  def arrow_join_puts(a, b) do
    IO.puts a <> " -> " <> b
  end
end

array = [12, 6, 8, 3, 10, 1, 0, 9]
Recursion.maxvalue_with_index(array, 3)
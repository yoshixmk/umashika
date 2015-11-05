defmodule Twitter do
  def search() do
    ExTwitter.search("elixir-lang", [count: 5]) |>
    Enum.map(fn(tweet) -> tweet.text end) |>
    Enum.join("\n-----\n") |>
    IO.puts
  end
end

defmodule Example do
  #コマンドラインから mix run -e "Example.main([])" で実行できる
  def main([]) do
    # ここからコードが実行
    Twitter.search()
  end

end

defmodule Twitter do
  def search() do
    ExTwitter.search("elixir-lang", [count: 5]) |>
    Enum.map(fn(tweet) -> tweet.text end) |>
    Enum.join("\n-----\n") |>
    IO.puts
  end
end

defmodule Example do
  #コマンドラインから mix run -e "Example.main()" で実行できる
  def main() do
    ExTwitter.configure(
      consumer_key: "ffHLfxCqNQld5CYhjSn7Umjyu",
      consumer_secret: "s8cdt6P85S9m5JR6YewPy8Dl2awTD3MOcNKW4KbgMiS6MjfWeE",
      access_token: "913514557-Ov9tvklSG88Kiz6ZQsbzgOPgG5rr0HLmU4mss0u4",
      access_token_secret: "Y2r6skcG6UQkqNuDKbDcpxyhbfwVYP83xeaIJBUMN30mK"
    )

    Twitter.search()
  end

end
defmodule HatenaBookmarks do

  # ここがアプリケーションのエントリーポイント
  def fetch_entry(url) do
    HTTPoison.start
    HTTPoison.get!("http://b.hatena.ne.jp/entrylist/json?sort=count&url=" <> url)
    |> decode_response
    |> extract_entry
    |> sort_descending_and_format
  end

  # APIを呼び出した結果をJSONにデコード
  def decode_response(%{status_code: 200, body: body}) do
    String.slice(body, 1..-3)
    |> Poison.decode!
  end

  def decode_response(%{status_code: ___, body: body}) do
    body
    |> Poison.decode!
  end

  # デコードしたJSONからblogエントリーのタイトルとURLを抽出
  def extract_entry(items), do: extract_entry(items, [])
  defp extract_entry([], res), do: res
  defp extract_entry([%{"title" => title, "count" => count}|tail], res) do
    extract_entry(tail, [{title, count} | res])
  end

  # 最後にソートと表示のために文字列を加工します
  def sort_descending_and_format(list_of_entries) do
    list_of_entries
    |> Enum.sort( fn {_, count1}, {_, count2} ->
      String.to_integer(count1) >= String.to_integer(count2) end)
    |> Enum.map( fn ({title, count}) -> "#{title} : #{count}件" end)
  end

  def format_entry(list_of_entries) do
    Enum.map(list_of_entries, fn ({title, count}) -> "#{title} : #{count}件" end)
  end

end

# ここからコードが実行されます
HatenaBookmarks.fetch_entry("http://dev.classmethod.jp")
|> Enum.each fn(entry) ->
  IO.inspect entry
end
# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
use Mix.Config
config :extwitter, :oauth, [
   consumer_key: "ffHLfxCqNQld5CYhjSn7Umjyu",
   consumer_secret: "s8cdt6P85S9m5JR6YewPy8Dl2awTD3MOcNKW4KbgMiS6MjfWeE
",
   access_token: "913514557-Ov9tvklSG88Kiz6ZQsbzgOPgG5rr0HLmU4mss0u4",
   access_token_secret: "Y2r6skcG6UQkqNuDKbDcpxyhbfwVYP83xeaIJBUMN30mK"
]
# This configuration is loaded before any dependency and is restricted
# to this project. If another project depends on this project, this
# file won't be loaded nor affect the parent project. For this reason,
# if you want to provide default values for your application for
# 3rd-party users, it should be done in your "mix.exs" file.

# You can configure for your application as:
#
#     config :twitterapi, key: :value
#
# And access this configuration in your application as:
#
#     Application.get_env(:twitterapi, :key)
#
# Or configure a 3rd-party app:
#
#     config :logger, level: :info
#

# It is also possible to import configuration files, relative to this
# directory. For example, you can emulate configuration per environment
# by uncommenting the line below and defining dev.exs, test.exs and such.
# Configuration from the imported file will override the ones defined
# here (which is why it is important to import them last).
#
#     import_config "#{Mix.env}.exs"

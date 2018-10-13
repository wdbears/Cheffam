const withTypescript = require("@zeit/next-typescript")
const withTM = require("next-plugin-transpile-modules")
const withPlugins = require("next-compose-plugins")
const withOffline = require("next-offline")
const nextEnv = require("next-env")
const dotenvLoad = require("dotenv-load")

dotenvLoad()

module.exports = withPlugins([nextEnv(), withOffline(), withTypescript()])

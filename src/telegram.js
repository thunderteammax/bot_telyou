// Confiration of Bot Telegram
const TOKEN_telegram = "1300599337:AAGhcgYO_TfSp7CdTRdwvSWETCTBLTNz1Cg"
const telegramBot = require("node-telegram-bot-api")
const bot = new telegramBot(TOKEN_telegram, { polling: true })

// Exporting the Token and the instancing of Bot
module.exports = {
    bot
}
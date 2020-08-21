// Confiration of Bot Telegram
const TOKEN_telegram = ""
const telegramBot = require("node-telegram-bot-api")
const bot = new telegramBot(TOKEN_telegram, { polling: true })

module.exports = {
    bot
}
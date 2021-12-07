const { 
    bot
} = require('./telegram')

const {
    TOKEN_youtube,
    part,
    type,
    orderClassification,
    quantidadeDeVideos
} = require('./youtube')

module.exports = {
    bot,
}

bot.onText(/([a-z]*)[^(Edu)(Music)(Ent)]/gi, (msg) => {
    bot.sendMessage(msg.chat.id, 
        `Hello ${msg.chat.first_name}, choose your option below!!!
Edu -> for Education
Music -> for Music
Ent -> for Entertainment`
    )
})

const request = require('request')

const channels = {
    channelsEducation,
    channelsMusic,
    channelsEntertainment,
    lastVideoIdEducation,
    lastVideoIdMusic,
    lastVideoIdEntertainment
} = require("./channels")

bot.onText(/^Edu$/i, (msg) => {
    for(let i = 0; i < channels.channelsEducation.length; i++){
        const search = `https://www.googleapis.com/youtube/v3/search?part=${part}&channelId=${channels.channelsEducation[i]}&key=${TOKEN_youtube}&maxResults=${quantidadeDeVideos}&type=${type}&order=${orderClassification}&fields=items(id(videoId)%2Csnippet(channelTitle))`
        request(`${search}`, function (error, response, body) {
            const textJson = JSON.parse(body)
            for(let j = 0; j < quantidadeDeVideos; j++){
                const info = {
                    channelTitle: `${textJson.items[j].snippet.channelTitle}`,
                    videoId: `${textJson.items[j].id.videoId}`
                }
                if(channels.lastVideoIdEducation.length == 0){
                    bot.sendMessage(msg.chat.id, `https://www.youtube.com/watch?v=${info.videoId}`)
                    channels.lastVideoIdEducation.push(info)
                }
                else{
                    let isChat = false;
                    for(let k = 0; k < channels.lastVideoIdEducation.length; k++){
                        if(info.channelTitle == channels.lastVideoIdEducation[k].channelTitle){
                            if(info.videoId == channels.lastVideoIdEducation[k].videoId){
                                isChat = true
                            }
                        }
                    }
                    if(isChat == true){
                        bot.sendMessage(msg.chat.id, `${info.channelTitle}'s is in the history.`)
                    }
                    else{
                        bot.sendMessage(msg.chat.id, `https://www.youtube.com/watch?v=${info.videoId}`)
                        channels.lastVideoIdEducation.push(info)
                    }
                }
            }
        })
        bot.on("polling_error", (err) => console.log(err))
    }
})

bot.onText(/^Music$/gi, (msg) => {
    for(let i = 0; i < channels.channelsMusic.length; i++){
        const search = `https://www.googleapis.com/youtube/v3/search?part=${part}&channelId=${channels.channelsMusic[i]}&key=${TOKEN_youtube}&maxResults=${quantidadeDeVideos}&type=${type}&order=${orderClassification}&fields=items(id(videoId)%2Csnippet(channelTitle))`
        request(`${search}`, function (error, response, body) {
            const textJson = JSON.parse(body)
            for(let j = 0; j < quantidadeDeVideos; j++){
                const info = {
                    channelTitle: `${textJson.items[j].snippet.channelTitle}`,
                    videoId: `${textJson.items[j].id.videoId}`
                }
                if(channels.lastVideoIdMusic.length == 0){
                    bot.sendMessage(msg.chat.id, `https://www.youtube.com/watch?v=${info.videoId}`)
                    channels.lastVideoIdMusic.push(info)
                }
                else{
                    let isChat = false;
                    for(let k = 0; k < channels.lastVideoIdMusic.length; k++){
                        if(info.channelTitle == channels.lastVideoIdMusic[k].channelTitle){
                            if(info.videoId == channels.lastVideoIdMusic[k].videoId){
                                isChat = true
                            }
                        }
                    }
                    if(isChat == true){
                        bot.sendMessage(msg.chat.id, `${info.channelTitle}'s is in the history.`)
                    }
                    else{
                        bot.sendMessage(msg.chat.id, `https://www.youtube.com/watch?v=${info.videoId}`)
                        channels.lastVideoIdMusic.push(info)
                    }
                }
            }
        })
        bot.on("polling_error", (err) => console.log(err))
    }
})

bot.onText(/^Ent$/gi, (msg) => {
    for(let i = 0; i < channels.channelsEntertainment.length; i++){
        const search = `https://www.googleapis.com/youtube/v3/search?part=${part}&channelId=${channels.channelsEntertainment[i]}&key=${TOKEN_youtube}&maxResults=${quantidadeDeVideos}&type=${type}&order=${orderClassification}&fields=items(id(videoId)%2Csnippet(channelTitle))`
        request(`${search}`, function (error, response, body) {
            const textJson = JSON.parse(body)
            for(let j = 0; j < quantidadeDeVideos; j++){
                const info = {
                    channelTitle: `${textJson.items[j].snippet.channelTitle}`,
                    videoId: `${textJson.items[j].id.videoId}`
                }
                if(channels.lastVideoIdEntertainment.length == 0){
                    bot.sendMessage(msg.chat.id, `https://www.youtube.com/watch?v=${info.videoId}`)
                    channels.lastVideoIdEntertainment.push(info)
                }
                else{
                    let isChat = false;
                    for(let k = 0; k < channels.lastVideoIdEntertainment.length; k++){
                        if(info.channelTitle == channels.lastVideoIdEntertainment[k].channelTitle){
                            if(info.videoId == channels.lastVideoIdEntertainment[k].videoId){
                                isChat = true
                            }
                        }
                    }
                    if(isChat == true){
                        bot.sendMessage(msg.chat.id, `${info.channelTitle}'s is in the history.`)
                    }
                    else{
                        bot.sendMessage(msg.chat.id, `https://www.youtube.com/watch?v=${info.videoId}`)
                        channels.lastVideoIdEntertainment.push(info)
                    }
                }
            }
        })
        bot.on("polling_error", (err) => console.log(err))
    }
})

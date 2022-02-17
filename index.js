const DailyBotG3 = require('node-telegram-bot-api');
//Les modules requie au bon fonctionnement du bot

const TOKEN = '5265779985:AAFaFCMeQsAo4kfeUfVqon9dOa8atYn0dfY';
//Le Token du bot (elle permet d'interagire avec le bot via le code)

const bot = new DailyBotG3(TOKEN, {polling:true});
//Variable du bot

let today = new Date().toLocaleDateString()
//Variable pour obtenire la date d'aujourd'hui

bot.onText(/Daily/, function (msg) {
    console.log(msg);
    let chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Préparez vous pour le Daily du '+today);
  })
//Permet d'envoyer un message de Daily du jour via la commande "/Daily" dans le tchat


setInterval(() => {

                //Id du tchat ou envoyer les message (-730119792 & 5160627421)
bot.sendMessage( -730119792, 'Préparez vous pour le Daily du '+today);
bot.sendMessage( 5160627421, 'Préparez vous pour le Daily du '+today);

 }, 86400000);// 1sec = 1000
//Fonction qui envoie un message aprés 86400 seconde (sois un jour)

 
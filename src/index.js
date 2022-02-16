const DailyBotG3 = require('node-telegram-bot-api');

const TOKEN = '5265779985:AAFaFCMeQsAo4kfeUfVqon9dOa8atYn0dfY';

const bot = new DailyBotG3(TOKEN, {polling:true});

let today = new Date().toLocaleDateString()

bot.onText(/Daily/, function (msg) {
    console.log(msg);
    let chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Préparez vous pour le Daily du '+today);
  })

setInterval(() => {
    
bot.sendMessage(-623609888, 'Préparez vous pour le Daily du '+today);
bot.sendMessage( 5160627421, 'Préparez vous pour le Daily du '+today);

 }, 86400000);


 
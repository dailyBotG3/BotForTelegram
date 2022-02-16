const DailyBotG3 = require('node-telegram-bot-api');

const TOKEN = '5265779985:AAFaFCMeQsAo4kfeUfVqon9dOa8atYn0dfY';

const bot = new DailyBotG3(TOKEN, {polling:true});
let q = new Date();
let m = q.getMonth();
let d = q.getDay();
let y = q.getFullYear();

let date = new Date(y,m,d);


bot.on('message', (message) => {
    console.log(message);
 
});

setInterval(() => {
    
bot.sendMessage(-623609888, 'Daily du '+date);

 }, 86400000);
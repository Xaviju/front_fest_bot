var TelegramBot = require('node-telegram-bot-api');
var config = require('./config.json');

// Setup polling way
var bot = new TelegramBot(config.token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/start/, function (msg) {
  var fromId = msg.from.id
  bot.sendMessage(fromId, "Hola, soy el bot del frontFest! Estaré encantada de responder tus preguntas sobre el evento");
});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});

// Matches /cat
bot.onText(/\/cat/, function (msg) {
  var chatId = msg.chat.id;
  var width = getRandomInt(100, 500);
  var height = getRandomInt(100, 500);
  var photo = `http://placekitten.com/${width}/${height}`;
  bot.sendPhoto(chatId, photo, {caption: 'meow!'});
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Ask for event location
bot.onText(/\/ubicacion/, function (msg) {
  var chatId = msg.chat.id;
  latitude = '40.412664';
  longitude = '-3.718301';
  title = 'frontFest (Google Campus)';
  address = 'Calle Moreno Nieto, 2, 28005 Madrid, Spain';
  bot.sendVenue(chatId, latitude, longitude, title, address);
  bot.sendMessage(chatId, 'Se accede por la entrada del auditorio');
 });

let config = require('./config'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс robot

const comms = require("./comms"); // Подключаем файл с командами для бота
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js  
const { Client, Intents } = require('discord.js');
const robot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');

robot.on('messageDelete', async (message) => {
  const logs = message.guild.channels.cache.find(channel => channel.name === "logs");
  if (message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) && !logs) {
    message.guild.channels.create('logs', { type: 'text' });
  }
  if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) && !logs) { 
    console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
  }  
  if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	// Since there's only 1 audit log entry in this collection, grab the first one
	const deletionLog = fetchedLogs.entries.first();

	// Perform a coherence check to make sure that there's *something*
	if (!deletionLog) return logs.send(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

	// Now grab the user object of the person who deleted the message
	// Also grab the target of this action to double-check things
	const { executor, target } = deletionLog;

	// Update the output with a bit more information
	// Also run a check to make sure that the log returned was for the same author's message
	if (target.id === message.author.id) {
		logs.send(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
	} else {
	  logs.send(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
	}
})

process.on('unhandledRejection', error => {
    console.error('Ошибка API', error);
    robot.channels.cache.get("889131803036762152").send("Ошибка API бота: " + error)
});

robot.on('ready', () => {
  console.log(robot.user.username + " запустился!");
  robot.user.setPresence({ activities: [{ name: 'Наблюдает за KVIT' }] });
});

robot.on('messageCreate', message => {
  if(message.content === "+ping") {
    const embed = new MessageEmbed()
     .setDescription(`**🏓 My ping is : **\`${Math.round(robot.ws.ping)}ms\``)
    message.channel.send({ embeds: [embed] });
  } 
  if(message.content == "привет") {
    message.reply("Привет! А ты смотрел доктора хауса? Нет? Бегом смотри - https://house-doc.ru/")
  }
  if(message.content == "Ку") {
    message.reply("Привет! А ты смотрел доктора хауса? Нет? Бегом смотри - https://house-doc.ru/")
  } 
  if(message.content == "Hello") {
    message.reply("Привет! А ты смотрел доктора хауса? Нет? Бегом смотри - https://house-doc.ru/")
  } 
  if(message.content == "Hi") {
    message.reply("Привет! А ты смотрел доктора хауса? Нет? Бегом смотри - https://house-doc.ru/")
  }
  if(message.content == "Дарова") {
    message.reply("Привет! А ты смотрел доктора хауса? Нет? Бегом смотри - https://house-doc.ru/")
  }
  if(message.content == "Хай") {
    message.reply("Привет! А ты смотрел доктора хауса? Нет? Бегом смотри - https://house-doc.ru/")
  }
  if(message.content == "Здарова") {
    message.reply("Привет! А ты смотрел доктора хауса? Нет? Бегом смотри - https://house-doc.ru/")
  }  
  if(message.content == "Доктор Хаус") {
    message.reply("@KVIT#0777 к вашим услугам")
  }   
  if(message.content == "+sorry") {
    message.channel.send("Да...")
}});

robot.on('messageCreate', message => {
  if (message.author.username != robot.user.username && message.author.discriminator != robot.user.discriminator) {
    var comm = message.content.trim() + " ";
    var comm_name = comm.slice(0, comm.indexOf(" "));
    var messArr = comm.split(" ");
    for (comm_count in comms.comms) {
      var comm2 = prefix + comms.comms[comm_count].name;
      if (comm2 == comm_name) {
        comms.comms[comm_count].out(robot, message, messArr);
      }
    }
}
});

require('./server')();
robot.login(token); // Авторизация бота
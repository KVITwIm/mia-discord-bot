let config = require('./config');
let token = config.token;
let prefix = config.prefix;

const comms = require("./comms");
const fs = require('fs');
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

	const deletionLog = fetchedLogs.entries.first();

	if (!deletionLog) return logs.send(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

	const { executor, target } = deletionLog;

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
   const id = interaction.options.get('Mira#3717')?.value;
	guild.members.unban(id);

  }
  
  
})
});

robot.on('messageCreate', message => {
  if(message.content === "+ping") {
    const embed = new MessageEmbed()
     .setDescription(`**🏓 My ping is : **\`${Math.round(robot.ws.ping)}ms\``)
    message.channel.send({ embeds: [embed] });
  }
 if(message.content === "Привет") {
    message.reply("Хай");
  } 
});

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
robot.login(token);

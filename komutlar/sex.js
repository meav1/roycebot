const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {


  if(!args[0]) {

  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} Buyrun doya doya.`)
  .setImage('https://media.giphy.com/media/3o7btPBvmsVXHjtH8Y/giphy.gif')
  message.channel.send({embed: buyEmb})
  return;
  }


  if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {

  const candyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} Buyrun doya doya.`)
  .setImage('https://media.giphy.com/media/3o7btPBvmsVXHjtH8Y/giphy.gif')
  message.channel.send({embed: candyEmb})
  return;
  }
  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} Buyrun doya doya.`)
  .setImage('https://media.giphy.com/media/3o7btPBvmsVXHjtH8Y/giphy.gif')
  message.channel.send({embed: buyEmb})

  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sex'],
    permLevel: 0
  };

  exports.help = {
    name: "sex",
    description: "İstediğin kişiyle sex yaparsınız.. o_o.",
    usage: "sex"
  };

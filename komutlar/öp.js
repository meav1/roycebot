const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {


  if(!args[0]) {

  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} kimi öpmeliyim ? [Örn: r!öp @isim]`)
  message.channel.send({embed: buyEmb})
  return;
  }


  if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {

  const candyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} ${message.mentions.members.first().user.username} öptün :kiss:`)
  .setImage('https://media.giphy.com/media/HKQZgx0FAipPO/giphy.gif')
  message.channel.send({embed: candyEmb})
  return;
  }
  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} kimi öpmeliyim ? [Örn: r!öp @isim] `)
  message.channel.send({embed: buyEmb})

  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['öp', 'öpücük'],
    permLevel: 0
  };

  exports.help = {
    name: 'öp',
    description: 'istediğiniz kişiyi öper!.',
    usage: 'öp [isim]'
  };

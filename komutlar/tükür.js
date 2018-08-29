const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {

  
  if(!args[0]) {

  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(` ${message.author.username} yere tükürdü!`)
  .setImage('https://media.giphy.com/media/l1BgS8dnkgLCdi7M4/giphy.gif')
  message.channel.send({embed: buyEmb})
  return;
  }
  
  
  if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {

  const candyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(` ${message.author.username} sana ${message.mentions.members.first().user.username} balgamlı balgamlı tükürdü. Hıaaaaaağh Puu!`)
  .setImage('https://media.giphy.com/media/l0HU5bbgdW6qzJsmQ/giphy.gif')
  message.channel.send({embed: candyEmb})
  return;
  }
  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(` ${message.author.username} yere tükürdü!`)
  .setImage('https://media.giphy.com/media/l1BgS8dnkgLCdi7M4/giphy.gif')
  message.channel.send({embed: buyEmb})

  }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tükür'],
    permLevel: 0
  };

  exports.help = {
    name: 'tükür',
    description: 'yere veya istediğiniz kişiye tükürür!.',
    usage: 'tükür [isim]'
  };

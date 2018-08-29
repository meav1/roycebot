const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {

  
if(!args[0]) {

const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(` ${message.author.username} PANDA !!`)
  .setImage('https://media.giphy.com/media/EPcvhM28ER9XW/giphy.gif')
  message.channel.send({embed: buyEmb})
  return;
  }

const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(` ${message.author.username} PANDA!!`)
  .setImage('https://media.giphy.com/media/EPcvhM28ER9XW/giphy.gif')
  message.channel.send({embed: buyEmb})

  }

  
exports.conf = {
   enabled: true,
  guildOnly: false,
  aliases: ['panda'],
  permLevel: 0
};

exports.help = {
  name: 'panda',
  description: 'Panda resmi atar!.',
   usage: 'panda [isim]'
 };

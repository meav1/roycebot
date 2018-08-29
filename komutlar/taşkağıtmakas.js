const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

exports.run = async (bot, message, args, color, prefix) => {
  var choice = args[0];
  if (choice == "kağıt" || choice == "k") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "kağıt";
    } else if (numb > 50) {
      var choice2 = "taş";
    } else {
      var choice2 = "makas";
    }
    if (choice2 == "makas") {
      var response = "Ben  **MAKAS** seçtim! :v: BERABERE!!"
    } else if (choice2 == "kağıt") {
      var response = "Ben **KAĞIT** seçtim! :hand_splayed: KAYBETTİM!"
    } else {
      var response = "Ben **TAŞ** seçtim! :punch: KAZANDIM!"
    }
    message.channel.send(response);
  } else if (choice == "taş" || choice == "t") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "kağıt";
    } else if (numb > 50) {
      var choice2 = "taş";
    } else {
      var choice2 = "makas";
    }
    if (choice2 == "kağıt") {
      var response = "Ben **Kağıt** seçtim ! :hand_splayed: BERABERE!"
    } else if (choice2 == "taş") {
      var response = "Ben **Taş**! seçtim ! :punch: KAYBETTİN"
    } else {
      var response = "Ben **Makas**! seçtim ! :v: SEN KAZANDIN!!"
    }
    message.channel.send(response);
  } else if (choice == "makas" || choice == "m") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "kağıt";
    } else if (numb > 50) {
      var choice2 = "taş";
    } else {
      var choice2 = "makas";
    }
    if (choice2 == "taş") {
      var response = "Ben **Kağıt** seçtim!:hand_splayed: KAZANDIM!"
    } else if (choice2 == "makas") {
      var response = "Ben **Makas**seçtim! :v: KAYBETTİM!"
    } else {
      var response = "Ben **Taş** seçtim! :punch: BERABERE!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`Yanlış yazıyorsunç  ! \`${prefix}tkm [seçenek]\` <taş|kağıt|makas>`);
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['l'],
  permLevel: 4
};

exports.help = {
	name: "tkm",
	description: 'Botla birlikte taş kağıt makas oynarsınız. [BOZUK]'
}
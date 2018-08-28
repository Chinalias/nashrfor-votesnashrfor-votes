const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
** السلام عليكم 

لوسمحت أبيك تصوتلي رقم 11 وشكرررا
:sleeping: :heart: 

Hey 
I Want You Vote For Number 11
And Thx :hugging:
-
Photo : https://cdn.discordapp.com/attachments/483997382812368908/484005050268647433/unknown.png
-
Link : [ https://discord.gg/gkXrKfs ]
 **
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
** السلام عليكم 

لوسمحت أبيك تصوتلي رقم 11 وشكرررا
:sleeping: :heart: 

Hey 
I Want You Vote For Number 11
And Thx :hugging:
-
Photo : https://cdn.discordapp.com/attachments/483997382812368908/484005050268647433/unknown.png
-
Link : [ https://discord.gg/gkXrKfs ]
 ** 
`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);

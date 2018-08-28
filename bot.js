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
Photo : http://prntscr.com/knurj9
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
Photo : http://prntscr.com/knurj9
-
Link : [ https://discord.gg/gkXrKfs ]
 ** 
`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);

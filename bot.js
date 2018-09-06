const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
** السلام عليكم 

لوسمحت أبيك تصوتلي رقم 16 وشكرررا
:sleeping: :heart: 

Hey 
I Want You Vote For Number 5
And Thx :hugging:
-
Pic : http://prntscr.com/krceiq
-
Link : [ https://discord.gg/eJZn2xN ]
[ ${member}  ]
 **
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
** السلام عليكم 

لوسمحت أبيك تصوتلي رقم 16 وشكرررا
:sleeping: :heart: 

Hey 
I Want You Vote For Number 5
And Thx :hugging:
-
Pic : http://prntscr.com/krceiq
-
Link : [ https://discord.gg/eJZn2xN ]
[ ${member}  ]
 ** 
`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);

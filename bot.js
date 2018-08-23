const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم ورحمة الله وبركاته
هل لديك وقت؟
تصويت رقم 11 من فضلك :sparkling_heart: 
**-صوتولي   __11__
 
- http://prntscr.com/klpv9a

- https://discord.gg/gkXrKfs

ممكن؟
آمل أن تصوت لي... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم ورحمة الله وبركاته
هل لديك وقت؟
تصويت رقم 11 من فضلك :sparkling_heart: 
**-صوتولي   __11__
 
- http://prntscr.com/klpv9a

- https://discord.gg/gkXrKfs
**
ممكن؟
آمل أن تصوت لي... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);

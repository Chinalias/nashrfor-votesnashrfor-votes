const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
- اخوى ممكن طلب لو تقدر
- ادخل هون صوتلى لو سمحت
- رابط المسابقه مباشر لعيونك
**
مشترك رقم **11**

**
فضلا وليس امرا من فضلك**
 
- http://prntscr.com/km789v

- https://discord.gg/gkXrKfs


آمل أن تصوت لي... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
- اخوى ممكن طلب لو تقدر
- ادخل هون صوتلى لو سمحت
- رابط المسابقه مباشر لعيونك
**
مشترك رقم **11**

**
فضلا وليس امرا من فضلك**
 
- http://prntscr.com/km789v

- https://discord.gg/gkXrKfs

ممكن؟
آمل أن تصوت لي... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);

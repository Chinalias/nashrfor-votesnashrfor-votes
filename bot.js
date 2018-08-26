const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
** ي قلبي ابيك تصوت للمتسابق رقم 11
ربي يسعدك ويدخلك الجنه لو صوتت 
الله يسعدك :(
-
Photo : http://prntscr.com/kn10al
-
Link : [ https://discord.gg/gkXrKfs ]
 **
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
** ي قلبي ابيك تصوت للمتسابق رقم 11
ربي يسعدك ويدخلك الجنه لو صوتت 
الله يسعدك :(
-
Photo : http://prntscr.com/kn10al
-
Link : [ https://discord.gg/gkXrKfs ]
 ** 
`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);

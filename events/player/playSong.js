const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
      .setAuthor({
        name: 'Currently playing a Track',
        iconURL: 'https://cdn.discordapp.com/attachments/857297765675958292/1227331254735863849/350kb.gif?ex=6628044d&is=66158f4d&hm=12d3d5e339759bf6eeee8054af1910059667700e99a7b343db5c0aa169acc562&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
    .setDescription(`\n ‎ \n▶️ **Details :** **${song?.name}**\n▶️ **Enjoy the Ultimate Music Experience. ** \n▶️ **If link breaks playback try to give query.**`)
.setImage(queue.songs[0].thumbnail)
    .setColor('#FF0000')
    .setFooter({ text: 'More info - Use /help command [Hosted By AMDBOY]' });
     
      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/

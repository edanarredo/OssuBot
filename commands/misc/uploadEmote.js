// @Author Mip

const { StickerFormatType } = require("discord.js");

module.exports = {
   name: "emote",

   execute(message, args) {

      // Check that there is only one attachment.
      if (message.attachments.size == 0) {
         message.channel.send({ content: `You didn't upload anything :sob:` });
         return;
      }
      else if (message.attachments.size > 1) {
         message.channel.send({ content: `I'm dumb and can only upload one emote at a time :joy:` });
         return;
      }

      // Split image url by slashes into list to get file type.
      const emoteName = args[0];
      const imageUrl = message.attachments.first().url;
      const imageUrlParts = imageUrl.split("/");
      const imageType = imageUrlParts[imageUrlParts.length - 1];

      // Create emoji
      message.guild.emojis.create({ attachment: imageUrl, name: emoteName })
         .then(emoji => message.channel.send({ content: `Created new emoji with name ${emoji.name}!`}))
         .catch(console.error);

   },
};


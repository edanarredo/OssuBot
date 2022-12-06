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

      // Split link by slashes into list to get file type.
      const imageUrlParts = message.attachments.first().url.split("/");
      const imageType = imageUrlParts[imageUrlParts.length - 1];

      // Check filetype. 
      if (imageType != ".jpg" || imageType != ".png") {
         // Use online converter or something.
      } 
   

      // Upload image as emoji.

      // Send results (success/fail)
      message.channel.send({ content: `ok.` });

   },
};


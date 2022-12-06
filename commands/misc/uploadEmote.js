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

      // If wrong filetype convert to jpg or png.
      // if (imageType != ".jpg" || imageType != ".png") {
      //    // Use online converter or something.
      // }

      // Upload image as emoji. This is not working
      // Documentation - https://discord.js.org/#/docs/main/stable/class/GuildEmojiManager?scrollTo=create
      message.guild.emojis.create(imageUrl, emoteName)
         .then(emoji => message.channel.send({ content: `Created new emoji with name ${emoji.name}!`}))
         .catch(console.error);

   },
};


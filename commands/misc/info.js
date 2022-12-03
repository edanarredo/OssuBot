/**
 * @file print rules
 * @author Mip
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */

module.exports = {
	name: "info",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ 
         "embeds": [
         {
           "type": "rich",
           "title": `This Server is NSFW`,
           "description": `There is a **Discord Role** that filters most of the NSFW channels if you'd like that for yourself - DM me and I can give you it. \n\nJust giving a heads up to newcomers :joy:. `,
           "color": 0x00FFFF
         },
         {
            "type": "rich",
            "title": `Create and Join Events!`,
            "description": `Anyone can create, host or join a \`Discord Event\`. Please use the feature if you want! \n\n**The author of any event is responsible for communicating any details, changes, etc.**`,
            "color": 0x00FFFF
          },
          {
            "type": "rich",
            "title": `Participation`,
            "description": `\`EVERYONE\` on this server is allowed and encouraged to join an ongoing voice chat or Event. Please be respectful when joining a call :happymonke:`,
            "color": 0x00FFFF
          },
          {
            "type": "rich",
            "title": `FFXIV FC In-game Resources`,
            "description": `Most FC resources and permissions are open to everyone, ask if you need something :) \n\nIf there are no \`FC buffs\`, feel free to activate them. \n\nIf you need an \`airship/submarine\` item, please ask **Kira Kabob**. \n\nIf you need \`Thavnarian Onions\` from the FC garden please ask **Mipha Ordona**.`,
            "color": 0x00FFFF
          },
          {
            "type": "rich",
            "title": `This is a Casual FC`,
            "description": `To me, the FC is just a way for us to hang out closely in-game. This FC won't be ran like a business b/c that's stressful. Hopefully this does not feel like a second job for myself or anyone :sob: \n\nExpectations and stuff for reclear groups, parties, statics, and any player-made group are decided by the players in the party. Not by anything set by 'the FC'.`,
            "color": 0x00FFFF
          },
          {
            "type": "rich",
            "title": `FFXIV FC Ranks`,
            "description": `\`Co-Owners\` will receive the Owner rank if the Owner goes inactive.\n\n\`Veterans\` have most permissions in the FC except for purchasing land, withdrawing gil, and accessing the last page of the FC vault (saved for scarce items needed to upgrade workshop/house stuff).\n\n\`Member\` is the default role when joining.`,
            "color": 0x00FFFF
          }
       ]});
	},
};
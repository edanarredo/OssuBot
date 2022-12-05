/**
 * @file Play command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */

 const { Collection, ChannelType, Client } = require("discord.js");

 module.exports = {
	name: "play",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {

		const member = message.member;
		console.log(member);
	},
};

 module.exports = {
	name: "skip",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ content: "skip." });
	},
};

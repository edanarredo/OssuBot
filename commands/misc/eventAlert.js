// Author @Mip

module.exports = {
	name: "ev",

	execute(message, args) {

		// Get the event that's closest to starting
		let closestEvent = message.guild.scheduledEvents.fetch()
			.then(result => { return result.last() });

		// Fetch users subscribed to event
		closestEvent
			.then((result) => { 
				message.channel.send({ content: `${result}` })
				result.fetchSubscribers()
				.then((result) => { 
					let messageContent = "Friendly reminder that this is the next event coming up! See y'all there ";
					result.forEach(item => messageContent += `<@${item.user.id}> `);
					message.channel.send({content: `${messageContent}`});
				})
			});
	},
};

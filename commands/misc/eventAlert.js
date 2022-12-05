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
					let messageContent = "Heads up that this event is starting soon! ";
					result.forEach(item => messageContent += `<@${item.user.id}> `);
					console.log(messageContent);
					message.channel.send({content: `${messageContent}`});
				})
			});
	},
};

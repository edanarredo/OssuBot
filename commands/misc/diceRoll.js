// Author @Mip

module.exports = {
	name: "random",

	execute(message, args) {

		// Get values and setup variables.
      const diceSize = parseInt(args[0], 10);
      
      // Output
      if (!Number.isInteger(diceSize)) {
         message.channel.send({ content: `Please enter a number that will be the dice size after !random. No decimals or letters please :(`});
      } else {
         const roll = Math.floor(Math.random() * (diceSize - 1 + 1) + 1)
         message.channel.send({ content: `You rolled a ${roll}!`});
      }
	},
};

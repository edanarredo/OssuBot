// Author @Mip

module.exports = {
	name: "random",

	execute(message, args) {

		// Get values and setup variables.
      const diceSize = parseInt(args[0], 10);
      
      // Output
      if (!Number.isInteger(diceSize) || diceSize <= 0) {
         message.channel.send({ content: `Please include the dice size in the command. No negative numbers, decimals, or letters please ;-;`});
      } else {
         const roll = Math.floor(Math.random() * (diceSize - 1 + 1) + 1)
         message.channel.send({ content: `You rolled a ${roll}!`});
      }
	},
};

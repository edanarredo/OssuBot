/**
 * @file Sample ping command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
 module.exports = {
	name: "temp",

	execute(message, args) {

      // Parse values from command argument
      const inputTemperature = args[0];
      const temperatureValue = parseInt(inputTemperature, 10);
      const temperatureType = inputTemperature.match(/[a-zA-Z]/)[0].toUpperCase();
      let goodInput = true;
      let otherTemperature = "";

      // Based on temperature input type, calculate opposite type temperature
      if (temperatureType == "F") 
         otherTemperature = `${Math.floor((temperatureValue - 32) * .5556)}° C`;
      else if (temperatureType == "C") 
         otherTemperature = `${Math.floor((temperatureValue * 1.8) + 32)}° F`;
      else 
         goodInput = false;
      
      // Show results. If bad input let user know.
      if (!goodInput)
         message.channel.send({ content: `I don't understand :joy:\nMake sure the temperature is formatted like these: 10C, 10F`});
      else
         message.channel.send({ content: `${temperatureValue}° ${temperatureType} is ${otherTemperature}` });
	},
};

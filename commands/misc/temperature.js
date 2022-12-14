// @Author Mip

module.exports = {
   name: "temp",

   execute(message, args) {

      // Get values and setup variables.
      const inputTemperature = args[0];
      const temperatureValue = parseInt(inputTemperature, 10);
      const temperatureType = (inputTemperature.match(/[a-zA-Z]/g) ?? ["INVALID"])[0].toUpperCase();
      let otherTemperature;

      // Input validation
      if (temperatureType.length != 1 || isNaN(temperatureValue)) {
         askForBetterInput();
         return;
      }

      // Convert temperatures
      if (temperatureType == "F")
         otherTemperature = `${Math.floor((temperatureValue - 32) * .5556)}° C`;
      else if (temperatureType == "C")
         otherTemperature = `${Math.floor((temperatureValue * 1.8) + 32)}° F`;
      else if (temperatureType == "K")
         otherTemperature = `${Math.floor((temperatureValue - 273.15))}° C and ${Math.floor((1.8 * (temperatureValue - 273) + 32))}° F`

      // Send message.
      message.channel.send({ content: `${temperatureValue}° ${temperatureType} is ${otherTemperature}` });

      // Helper function
      function askForBetterInput() {

         if (inputTemperature == "yourmom")
            message.channel.send({ content: `:weary::hot_face::weary::hot_face:` });
         else
            message.channel.send({ content: `I don't understand :joy:\nMake sure the temperature is formatted like these: 10C, 10F` });
      }
   },
};

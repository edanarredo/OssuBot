// @Author Mip

const { http } = require("http");
const { pliant_api_key } = require("../../config.json");

module.exports = {
   name: "valServer",

   execute(message, args) {

      // Input validation
      if (desiredPowerState != "on" || desiredPowerState != "off") {
         askForBetterInput();
         return;
      }

      // Get values and setup variables.
      const desiredPowerState = args[0] == "on" ? "turnOn" : "turnOff";
      console.log(message.author);

      // Make api request.

      console.log(desiredPowerState);
      
      const options = {
         hostname: 'https://my.pliant.io',
         path: `/a/ossu/prod/powerValheimServer?api_key=${pliant_api_key}`,
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: {
            'power': desiredPowerState
         }
      };

      const req = http.request(options, (res) => {
         console.log(`statusCode: ${res.statusCode}`);

         res.on('data', (d) => {
            message.channel.send({ content: `${d.result} ${d}` });
         });
      });
   
      // Helper function
      function askForBetterInput() {
         message.channel.send({ content: `I don't understand :joy:\nThe server can only be on or off.` });
      }
   },
};

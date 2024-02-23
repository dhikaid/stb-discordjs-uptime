// BASE CONF
require("dotenv").config();
const discordToken = process.env.DISCORD_TOKEN;

// PING
var ping = require("ping");
var hosts = ["1.1.1.1"];

// DISCORD JS
const {
  Client,
  Events,
  GatewayIntentBits,
  ActivityType,
  time,
} = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// UPTIME

const waktu = Date.now();
let startUptime = 0;

client.on("ready", () => {
  startUptime = waktu;
  console.log("BOT Sudah siap!");
  console.log(startUptime);
});

client.on("messageCreate", () => {
  setInterval(function () {
    setPrecense(getUptimeString());
  }, 5000);
});

// CLIENT WAJIB LOGIN
client.login(discordToken);

// FUNCTION
function setPrecense(uptime = 0) {
  let pingRN = 0;
  hosts.forEach(function (host) {
    ping.promise
      .probe(host, {
        timeout: 1,
      })
      .then(function (res) {
        //   console.log(Math.floor(res.avg));
        pingRN = Math.floor(res.avg);
        client.user.setPresence({
          activities: [
            {
              name: `${uptime} | ping ${pingRN}ms`,
              type: ActivityType.Watching,
            },
          ],
        });
      });
  });
}

function getUptimeString() {
  // Get the current date and time
  const now = new Date();

  // Calculate the elapsed time since the reference point
  const elapsedTime = now - new Date(startUptime); // Assuming the reference point is January 1, 2022

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

  // Format the time components to have leading zeros
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // Construct the uptime string
  const uptimeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  return uptimeString;
}

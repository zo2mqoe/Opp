const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log("Bot Online: " + client.user.tag);
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "!ping") {
    msg.reply("pong!");
  }

  if (msg.content.startsWith("!say ")) {
    msg.channel.send(msg.content.slice(5));
  }
});

client.login(process.env.TOKEN);

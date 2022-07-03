'use strict';

// imports
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const token = process.env.DISCORD_TOKEN;

// create new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('READY');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'roblox') {
    await interaction.reply(
      `What the blox did you just bloxxing say about me, you little noob? I'll have you know I graduated top of my class in F.E.A.R, and I've been involved in numerous secret raids on NFC, and I have over 300 confirmed kills. I am trained in ODer warfare and I'm the top sniper in F.E.A.R . You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this game, mark my bloxxing words. You think you can get away with saying that shit to me over the Internet? Think again, noob. As we speak I am contacting my secret network of spies across ROBLOXand your IP is being traced right now so you better prepare for the storm, scrub. The storm that wipes out the pathetic little thing you call your account. You're bloxxing dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the ROBLOX Catalog and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your bloxxing tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn noob. I will shit fury all over you and you will drown in it. You're bloxxing dead, noob`,
    );
  } else if (commandName === 'pingpat') {
    const user = '@LazyEye#9885';
    await interaction.reply(`${user}, Let's play ROBLOX with DEEZ!`);
  }
});

client.login(token);

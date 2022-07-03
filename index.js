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

client.login(token);

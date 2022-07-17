'use strict';

// imports
require('dotenv').config({ path: '../.env' });
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const clientId = process.env.DISCORD_CLIENT_ID;
// const guildId = process.env.DISCORD_GUILDID;
const token = process.env.DISCORD_TOKEN;
console.log(clientId);

const commands = [
  new SlashCommandBuilder()
    .setName('roblox')
    .setDescription('Replies with ...!'),
  new SlashCommandBuilder()
    .setName('pingpat')
    .setDescription('Pings Pat, the master of ROBLOX'),
  new SlashCommandBuilder()
    .setName('dinglenuts')
    .setDescription('BEHOLD... The power of DINGLENUTS'),
].map((command) => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest
  .put(Routes.applicationCommands(clientId), { body: commands })
  .then(() => console.log('Successfully registed application commands.'))
  .catch(console.error);

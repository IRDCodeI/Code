const { SlashCommandBuilder } = require('discord.js');
const { join } = require('node:path');
const { createReadStream } = require("node:fs");
const { createAudioPlayer, createAudioResource, joinVoiceChannel, StreamType } = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play youtube song'),
    
        async execute(interaction){

            playSong(interaction.client);
            await interaction.reply('Playing song');
        }
}

function playSong(client){

    const player = createAudioPlayer();
    let resource = createAudioResource(join(__dirname, 'track.mp3'));

    console.log(resource);

    channel = client.channels.cache.get("841875286786179088");

    connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
    }).subscribe(player);

    player.play(resource);

    player.on('error', error => {
        console.error(`Error: ${error.message} with resource`);
    });
}

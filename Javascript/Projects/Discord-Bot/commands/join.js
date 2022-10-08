const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

let channel = null,
    connection = null;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('Join into a channel voice'),

    async execute(interaction) {
        
        joinBot(interaction.client);
        await interaction.reply(`Joined in ${channel}`);
    } 
}

function joinBot(client){
    channel = client.channels.cache.get("841875286786179088");
    if (!channel) return console.error("The channel does not exist!");

    connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });

}

module.exports = {
    config: {
        name: "name",
        perms: ['SEND_MESSAGES'],
        bot: ['SEND_MESSAGES'],
        aliases: ['setname'],
        category: "voice",
        usage: ['[name]']
    },
    async execute(client, message, args, guildCache) {
        try{
            const voice = client.voices.get(message.member.voice.channelID);
            if(voice || voice.owner == message.member.id){
                if(!args[0]) return message.reply('xin thí chủ cho cái tên!');
                const name = args.slice(0).join(' ');
                await message.member.voice.channel.setName(name);
                return message.react('<:hmmmmm:770520614444335104>')
            }else if(!voice) return message.react('❌');
        }catch(e) {
            return require('../../tools/functions/error')(e, message);
        }
    }
}
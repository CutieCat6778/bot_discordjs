module.exports = {
    config: {
        name: "lockdown",
        perms: ['MANAGE_GUILD'],
        bot: [],
        aliases: ['lock'],
        category: "administrator"
    },
    async execute(client, message, args, guildCache) {
        try{
            const msg = await message.channel.send({embed: {description: "Please wait!"}})
            await message.guild.channels.cache.forEach(channel => {
                channel.permissionOverwrites.forEach(overwrite => {
                    if(role.id == "801544851740033045" || role.id == "823277690840023040") return;
                    const role = message.guild.roles.cache.get(overwrite.id);
                    if(message.guild.me.roles.highest.position > role.position){
                        overwrite.allow = overwrite.allow.toArray()
                        overwrite.deny = overwrite.deny.toArray()
                        overwrite.deny.splice(overwrite.allow.indexOf("SEND_MESSAGES"), 1)
                        overwrite.allow.push("SEND_MESSAGES")
                        overwrite.allow = new Permissions(overwrite.allow)
                        overwrite.deny = new Permissions(overwrite.deny)
                    }
                })
                channel.overwritePermissions(channel.permissionOverwrites);
            })
            return msg.edit({embed: {description: "Server này đã được khóa lại bởi Gà, tất cả mọi người hãy bình tĩnh lại và tự tin để chiến thắng cái drama! Thằng Cat rất là đập troai <:hmmmmm:770520614444335104>"}})
        }catch(e) {
            return require('../../tools/functions/error')(e, message);
        }
    }
}
const Client = require('./src/structures/Client');

const client = new Client({
	intents: [
		'Guilds',
		'GuildMessageReactions',
		'GuildMessages',
		'GuildInvites',
		'GuildVoiceStates',
		'GuildMembers',
		'GuildPresences',
	],
});

client.login(process.env.BOT_TOKEN).catch(err => console.log(err));
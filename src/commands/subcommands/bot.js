const Command = require("../../structures/Command");

module.exports = class extends Command {
  constructor(client) {
		super(client, {
			name: 'bot',
			description: 'Veja meus comandos específicos',
			options: [
				{
					type: 1,
					name: 'ping',
					description: 'Veja meu ping.',
}
        ]
		})
	}

	run = async (interaction, emoji) => {

		const subCommand = interaction.options.getSubcommand()

    require(`../../../src/subCommands/bot/${subCommand}`)(this.client, interaction)

  }
}
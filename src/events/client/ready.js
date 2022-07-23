const Event = require("../../structures/Event");
const errorHandler = require("../../handlers/errorHandler");

module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: "ready",
    });
  }

  run = async () => {
      errorHandler();
      await this.client.loadCommands();
      await this.client.registryCommands(); // Registra os comandos no servidor

      this.client.user.setPresence({
        activities: [{ name: "bah", type: "PLAYING" }],
        status: "dnd",
      });
    
    console.log(
        `Bot ${this.client.user.username} logado com sucesso em ${this.client.guilds.cache.size} servidores.`
      );
  };
};
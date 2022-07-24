const { Client } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const clientVulkava = require("../../src/lavalink/vulkava/index.js");
module.exports = class extends Client {
  constructor(options) {
    super(options);
    this.vulkava = clientVulkava(this)
    this.commands = [];
    this.loadEvents();
  }

  loadCommands(path = "src/commands") {
      const categories = readdirSync(path);

      for (const category of categories) {
       const commands = readdirSync(`${path}/${category}`);

        for (const command of commands) {
          const commandClass = require(join(
            process.cwd(),
            `${path}/${category}/${command}`
          ));

          const cmd = new commandClass(this);

          this.commands.push(cmd);
          console.log(`Comando ${cmd.name} carregado.`);
        }
      }
  }
loadEvents(path = "src/events") {
      const categories = readdirSync(path);

      for (const category of categories) {
        const events = readdirSync(`${path}/${category}`);

        for (const event of events) {
          const eventClass = require(join(
            process.cwd(),
            `${path}/${category}/${event}`
          ));
          const evt = new eventClass(this);

          this.on(evt.name, evt.run);
        }
  }
  console.log("Eventos carregados com sucesso");
  }
  async registryCommands() {
const guild = await this.guilds.cache.get("976835336657330187");//slash regional do servidor de testes
    try {
      await guild.commands.set(this.commands);
      console.log("Comandos setados com sucesso");
    } catch (err) {
      console.log(`ERRO ENCONTRADO: ${err.message}`);
    }
  }
};
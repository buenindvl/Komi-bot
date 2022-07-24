const { Vulkava } = require('vulkava')

module.exports = (client) => {
    return new Vulkava({
        nodes: [
            {
                id: 'Nevasca',
  hostname: process.env.HOST, 
  port: 80,
  password: process.env.PASS,
  region: 'USA',
  resumeKey: '124',
  resumeTimeout: 150000
            }
        ],
         sendWS: (guildId, payload) => {
    client.guilds.cache.get(guildId)?.shard.send(payload);
        }
    })
  .on("nodeConnect", async(node) => console.log(`[${node.options.id}] Conectado.`))
  .on("error", async(node, error) => console.log(error.message))
}
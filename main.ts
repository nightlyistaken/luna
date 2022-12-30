import { CommandClient } from './deps.ts';
import commandHandler from './handlers/commands.ts';
import eventHandler from './handlers/events.ts';
import config from './config.json' assert { type: 'json' };

const token = Deno.env.get('TOKEN');
const client = new CommandClient({
  prefix: config.prefixes,
  intents: [
    'GUILDS',
    'DIRECT_MESSAGES',
    'GUILD_MESSAGES',
  ],
  token,
});

const commandFiles = Deno.readDir('./commands');

eventHandler({ client });
commandHandler({ client, commandFiles });

client.connect();

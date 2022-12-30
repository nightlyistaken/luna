import { Command, CommandClient } from '../deps.ts';

interface CommandHandlerOptions {
  client: CommandClient;
  commandFiles: AsyncIterable<Deno.DirEntry>;
}

export default async function commandHandler(
  { client, commandFiles }: CommandHandlerOptions,
) {
  for await (const file of commandFiles) {
    if (file.isFile && file.name.endsWith('.ts')) {
      const command = (await import(`../commands/${file.name}`))
        .default as Command;
      client.commands.add(command);
    }
  }
}

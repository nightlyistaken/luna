import { Command, CommandContext } from '../deps.ts';

export default class PingCommand extends Command {
  name = 'ping';
  execute(ctx: CommandContext) {
    ctx.message.channel.send(`Ping: ${ctx.client.gateway.ping}ms`);
  }
}
